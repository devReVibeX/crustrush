import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "Terms & Conditions | CRUSTRUSH" };

export default function TermsPage() {
  return (
    <section className="container-x py-20 sm:py-28">
      <ScrollReveal className="mx-auto max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="section-heading mt-3">Terms & Conditions</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-crust-black/70">
          <p>
            These Terms & Conditions are a demo placeholder for the CRUSTRUSH fictional brand, created solely for
            portfolio and demonstration purposes. CRUSTRUSH is not a real, operating business.
          </p>
          <p>
            Menu items, prices, offers and locations shown throughout this site are fictional and used to
            demonstrate website design and development capability. No real transactions, orders or reservations
            are processed through this demo.
          </p>
          <p>For licensing or usage questions about this demo, please reach out via the Contact page.</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
