import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import OfferCard from "@/components/OfferCard";
import { offers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Offers | CRUSTRUSH",
  description: "Explore current CRUSTRUSH combo offers and limited-time deals in Chandigarh.",
};

export default function OffersPage() {
  return (
    <>
      <section className="bg-crust-charcoal py-16 sm:py-20">
        <div className="container-x text-center">
          <ScrollReveal>
            <span className="eyebrow text-crust-gold">Deals & Combos</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-crust-cream sm:text-5xl">Offers Worth Craving</h1>
            <p className="mx-auto mt-4 max-w-xl text-crust-cream/70">
              From student combos to family feasts — there's a CRUSTRUSH deal for every craving and every crowd.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="flex flex-col gap-8">
          {offers.map((offer, i) => (
            <ScrollReveal key={offer.id} delay={i * 0.08}>
              <OfferCard offer={offer} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
