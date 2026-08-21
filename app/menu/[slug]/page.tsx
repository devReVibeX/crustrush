import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronLeft, Flame, Star } from "lucide-react";
import { menuItems } from "@/lib/data";
import QuantitySelector from "@/components/QuantitySelector";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

export function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = menuItems.find((i) => i.slug === params.slug);
  if (!item) return { title: "Item Not Found | CRUSTRUSH" };
  return {
    title: `${item.name} | CRUSTRUSH`,
    description: item.description,
  };
}

export default function MenuItemPage({ params }: { params: { slug: string } }) {
  const item = menuItems.find((i) => i.slug === params.slug);
  if (!item) notFound();

  const recommended = menuItems
    .filter((i) => i.category === item.category && i.slug !== item.slug)
    .slice(0, 3);

  return (
    <div className="container-x py-12 sm:py-16">
      <Link href="/menu" className="inline-flex items-center gap-1.5 text-sm font-semibold text-crust-black/60 transition-colors hover:text-crust-ember">
        <ChevronLeft className="h-4 w-4" /> Back to Menu
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="relative aspect-square w-full overflow-hidden rounded-xl2 shadow-lift">
          <Image src={item.image} alt={item.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
          <div className="absolute left-4 top-4 flex gap-2">
            {item.popular && (
              <span className="flex items-center gap-1 rounded-full bg-crust-gold px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-crust-black">
                <Star className="h-3.5 w-3.5 fill-crust-black" /> Popular
              </span>
            )}
            {item.spicy && (
              <span className="flex items-center gap-1 rounded-full bg-crust-ember px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-crust-cream">
                <Flame className="h-3.5 w-3.5" /> Spicy
              </span>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <span className="eyebrow">{item.category}</span>
          <div className="mt-2 flex items-center gap-3">
            <h1 className="font-display text-3xl font-bold sm:text-4xl">{item.name}</h1>
            {item.veg ? (
              <span className="veg-dot" title="Vegetarian"><span /></span>
            ) : (
              <span className="nonveg-dot" title="Non-Vegetarian"><span /></span>
            )}
          </div>
          <p className="mt-4 text-base leading-relaxed text-crust-black/70">{item.description}</p>
          <div className="mt-6 font-display text-3xl font-bold text-crust-ember">₹{item.price}</div>

          <div className="mt-8">
            <QuantitySelector item={item} />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-crust-black">Ingredients</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-crust-black/65">
                {item.ingredients.map((ing) => (
                  <li key={ing}>• {ing}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-crust-black">Dietary Info</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.dietary.map((d) => (
                  <li key={d} className="rounded-full bg-crust-paper px-3 py-1 text-xs font-semibold text-crust-black/70">
                    {d}
                  </li>
                ))}
              </ul>
              {item.calories && <p className="mt-3 text-sm text-crust-black/50">{item.calories}</p>}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {recommended.length > 0 && (
        <section className="mt-20">
          <h2 className="section-heading">You Might Also Like</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {recommended.map((r) => (
              <ProductCard key={r.slug} item={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
