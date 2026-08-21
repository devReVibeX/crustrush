import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "Privacy Policy | CRUSTRUSH" };

export default function PrivacyPolicyPage() {
  return (
    <section className="container-x py-20 sm:py-28">
      <ScrollReveal className="mx-auto max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="section-heading mt-3">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-crust-black/70">
          <p>
            This Privacy Policy is a demo placeholder for the CRUSTRUSH fictional brand, built for portfolio
            purposes. In a live deployment, this page would outline how customer data — including names, contact
            details, order history and reservation information — is collected, stored and used.
          </p>
          <p>
            CRUSTRUSH (demo) does not sell personal data to third parties. Information submitted through the
            contact, reservation or ordering forms on this demo site is not transmitted or stored anywhere, as
            this is a portfolio showcase without a live backend.
          </p>
          <p>For questions about this demo, reach out via the Contact page.</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
