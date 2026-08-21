"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/CartProvider";

export default function QuantitySelector({ item }: { item: import("@/lib/types").MenuItem }) {
  const { price, name } = item;
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
      <div className="flex items-center gap-4 rounded-full border border-black/10 bg-white px-2 py-2">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
          className="flex h-9 w-9 items-center justify-center rounded-full text-crust-black transition-colors hover:bg-crust-black hover:text-crust-cream"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center font-display text-lg font-semibold">{qty}</span>
        <button
          onClick={() => setQty((q) => q + 1)}
          aria-label="Increase quantity"
          className="flex h-9 w-9 items-center justify-center rounded-full text-crust-black transition-colors hover:bg-crust-black hover:text-crust-cream"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <button
        onClick={() => {
          addItem(item, qty);
          setAdded(true);
          setTimeout(() => setAdded(false), 2200);
        }}
        className="btn-primary flex-1 sm:flex-none"
        aria-label={`Add ${qty} ${name} to order`}
      >
        <ShoppingBag className="h-4 w-4" />
        {added ? "Added to Order" : `Add to Order · ₹${price * qty}`}
      </button>
    </div>
  );
}
