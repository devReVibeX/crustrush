"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SearchX } from "lucide-react";
import { menuItems } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import CategoryTabs from "@/components/CategoryTabs";
import ScrollReveal from "@/components/ScrollReveal";

export default function MenuGrid() {
  const params = useSearchParams();
  const initialCategory = params.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <CategoryTabs active={category} onChange={setCategory} />
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-crust-black/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the menu..."
            aria-label="Search menu items"
            className="w-full rounded-full border border-black/10 bg-white py-3 pl-11 pr-4 text-sm text-crust-black outline-none transition-colors focus:border-crust-ember"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-3 py-16 text-center">
          <SearchX className="h-10 w-10 text-crust-black/30" />
          <p className="text-crust-black/60">No items match your search. Try a different keyword or category.</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.slug} delay={Math.min(i * 0.04, 0.3)}>
              <ProductCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
