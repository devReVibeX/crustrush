"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame, Plus, Star } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { MenuItem } from "@/lib/types";

export default function ProductCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  return (
    <div className="card-surface group flex flex-col overflow-hidden">
      <Link href={`/menu/${item.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-crust-paper">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {item.popular && (
            <span className="flex items-center gap-1 rounded-full bg-crust-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-crust-black">
              <Star className="h-3 w-3 fill-crust-black" /> Popular
            </span>
          )}
          {item.spicy && (
            <span className="flex items-center gap-1 rounded-full bg-crust-ember px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-crust-cream">
              <Flame className="h-3 w-3" /> Spicy
            </span>
          )}
        </div>
        <div className="absolute right-3 top-3">
          {item.veg ? (
            <span className="veg-dot bg-white" title="Vegetarian"><span /></span>
          ) : (
            <span className="nonveg-dot bg-white" title="Non-Vegetarian"><span /></span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/menu/${item.slug}`}>
          <h3 className="font-display text-lg font-semibold text-crust-black transition-colors group-hover:text-crust-ember">
            {item.name}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-crust-black/65">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-crust-black">₹{item.price}</span>
          <button
            onClick={() => addItem(item)}
            className="flex items-center gap-1.5 rounded-full bg-crust-black px-4 py-2 text-xs font-bold uppercase tracking-wide text-crust-cream transition-all hover:bg-crust-ember active:scale-95"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}
