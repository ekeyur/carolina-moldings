"use client";

import { useEffect, useRef, ReactNode } from "react";

type AnimationType = "up" | "left" | "right" | "scale";

interface ScrollAnimateProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollAnimate({
  children,
  animation = "up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold]);

  const animationClass = {
    up: "scroll-animate",
    left: "scroll-animate-left",
    right: "scroll-animate-right",
    scale: "scroll-animate-scale",
  }[animation];

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}
