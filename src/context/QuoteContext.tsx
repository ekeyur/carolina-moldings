"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getCaseQty } from "@/lib/case-qty";

export type QuoteItem = {
  id: string;
  name: string;
  partNo: string;
  supplier: "carolina" | "nuts-and-swivels";
  quantity: number;
  image?: string;
  specLine?: string;
};

type QuoteContextValue = {
  items: QuoteItem[];
  count: number;
  add: (item: Omit<QuoteItem, "quantity">) => void;
  setQty: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  isInQuote: (id: string) => boolean;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

const STORAGE_KEY = "cmi-quote";

// Case-packed items are always a whole number of cases (at least one).
function snapToCase(id: string, quantity: number) {
  const caseQty = getCaseQty(id);
  if (!caseQty) return quantity;
  return Math.max(1, Math.ceil(quantity / caseQty)) * caseQty;
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: QuoteItem[] = JSON.parse(stored);
        setItems(parsed.map((i) => ({ ...i, quantity: snapToCase(i.id, i.quantity) })));
      }
    } catch {
      // ignore corrupt storage
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, mounted]);

  const add = (item: Omit<QuoteItem, "quantity">) => {
    const step = getCaseQty(item.id) ?? 1;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + step } : i));
      }
      return [...prev, { ...item, quantity: step }];
    });
  };

  const setQty = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity: snapToCase(id, quantity) } : i)),
      );
    }
  };

  const remove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clear = () => setItems([]);

  const isInQuote = (id: string) => items.some((i) => i.id === id);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <QuoteContext.Provider value={{ items, count, add, setQty, remove, clear, isInQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
