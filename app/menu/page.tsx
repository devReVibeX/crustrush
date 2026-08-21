import { Suspense } from "react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import MenuGrid from "@/components/MenuGrid";

export const metadata: Metadata = {
  title: "Menu | CRUSTRUSH",
  description: "Browse the full CRUSTRUSH menu — pizzas, burgers, sides, desserts and beverages.",
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-crust-charcoal py-16 sm:py-20">
        <div className="container-x text-center">
          <ScrollReveal>
            <span className="eyebrow text-crust-gold">Our Menu</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-crust-cream sm:text-5xl">
              Crafted For Serious Cravings
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-crust-cream/70">
              10 signature pizzas, loaded burgers, crave-worthy sides, desserts and refreshing beverages — all made fresh, daily.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <Suspense fallback={<div className="py-20 text-center text-crust-black/50">Loading menu...</div>}>
          <MenuGrid />
        </Suspense>
      </section>
    </>
  );
}
