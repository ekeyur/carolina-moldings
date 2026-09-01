"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuote, type QuoteItem } from "@/context/QuoteContext";

export function AddToQuoteButton({
  item,
  className = "",
}: {
  item: Omit<QuoteItem, "quantity">;
  className?: string;
}) {
  const { add, isInQuote } = useQuote();
  const inQuote = isInQuote(item.id);

  return (
    <Button
      onClick={() => add(item)}
      className={`w-full sm:w-auto rounded-[3px] font-semibold px-8 gap-1.5 ${
        inQuote
          ? "bg-green text-white hover:bg-green-700"
          : "bg-brand-red hover:bg-red-700 text-white"
      } ${className}`}
    >
      {inQuote ? (
        "✓ In Quote List"
      ) : (
        <>
          <Plus className="h-4 w-4" /> Add to Quote
        </>
      )}
    </Button>
  );
}
