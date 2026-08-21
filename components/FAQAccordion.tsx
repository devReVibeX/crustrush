"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/types";

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 rounded-xl2 border border-black/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-crust-ember sm:px-7"
            >
              <span className="font-display text-base font-semibold text-crust-black sm:text-lg">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-crust-ember transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid overflow-hidden px-5 transition-all duration-300 sm:px-7 ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-crust-black/70">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
