import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Navigation, Phone, ShoppingBag, CalendarCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import MapSection from "@/components/MapSection";
import { branches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Locations | CRUSTRUSH",
  description: "Find your nearest CRUSTRUSH branch in Sector 17, Sector 35 and Mohali.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-crust-charcoal py-16 sm:py-20">
        <div className="container-x text-center">
          <ScrollReveal>
            <span className="eyebrow text-crust-gold">Find A Branch</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-crust-cream sm:text-5xl">Our Locations</h1>
            <p className="mx-auto mt-4 max-w-xl text-crust-cream/70">
              Three branches across Chandigarh and Mohali — dine in, take away or order home delivery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="flex flex-col gap-14">
          {branches.map((b, i) => (
            <ScrollReveal key={b.id} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-8 rounded-xl2 border border-black/10 bg-white p-6 shadow-card sm:p-9 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="font-display text-2xl font-bold sm:text-3xl">{b.name}</h2>
                  <p className="mt-3 text-sm text-crust-black/65">
                    {b.addressLines.join(", ")}, {b.city}, {b.state} {b.postalCode}, {b.country}
                  </p>
                  <div className="mt-5 space-y-2.5 text-sm text-crust-black/70">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-crust-ember" /> {b.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-crust-ember" /> {b.hours}
                    </p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Navigation className="h-4 w-4" /> Get Directions
                    </a>
                    <Link href="/menu" className="btn-secondary">
                      <ShoppingBag className="h-4 w-4" /> Order Now
                    </Link>
                    <Link href="/reservation" className="btn-secondary">
                      <CalendarCheck className="h-4 w-4" /> Reserve Table
                    </Link>
                  </div>
                </div>
                <MapSection query={`${b.name} — ${b.locality}, ${b.city}`} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
