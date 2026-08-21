import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ReservationForm from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Reservation | CRUSTRUSH",
  description: "Reserve a table at any CRUSTRUSH branch in Chandigarh or Mohali.",
};

export default function ReservationPage() {
  return (
    <>
      <section className="bg-crust-charcoal py-16 sm:py-20">
        <div className="container-x text-center">
          <ScrollReveal>
            <span className="eyebrow text-crust-gold">Book A Table</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-crust-cream sm:text-5xl">Reserve Your Table</h1>
            <p className="mx-auto mt-4 max-w-xl text-crust-cream/70">
              Planning a dinner, celebration or catch-up? Reserve your table at any CRUSTRUSH branch in under a minute.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <ReservationForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
