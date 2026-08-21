import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import MapSection from "@/components/MapSection";
import { faqs, branches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | CRUSTRUSH",
  description: "Get in touch with CRUSTRUSH — call, WhatsApp, email, or send us a message directly.",
};

const mainBranch = branches[0];

export default function ContactPage() {
  return (
    <>
      <section className="bg-crust-charcoal py-16 sm:py-20">
        <div className="container-x text-center">
          <ScrollReveal>
            <span className="eyebrow text-crust-gold">Get In Touch</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-crust-cream sm:text-5xl">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-xl text-crust-cream/70">
              Questions, feedback or bulk orders — we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              <InfoRow icon={Phone} label="Phone" value="+91 xxxxxx xxxxx" href="tel:+91 xxxxx xxxxx" />
              <InfoRow icon={MessageCircle} label="WhatsApp" value="+91 xxxxxx xxxxx" href="https://wa.me/+91 xxxxx xxxxx" />
              <InfoRow icon={Mail} label="Email" value="hello@crustrush.demo" href="mailto:hello@crustrush.demo" />
              <InfoRow
                icon={MapPin}
                label="Address"
                value={`${mainBranch.addressLines.join(", ")}, ${mainBranch.city} ${mainBranch.postalCode}`}
              />
              <div className="flex items-start gap-3 rounded-xl2 border border-black/10 bg-white p-5 shadow-card">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-crust-ember" />
                <div className="text-sm text-crust-black/70">
                  <p className="font-semibold text-crust-black">Hours</p>
                  <p>Mon–Thu 11 AM – 11 PM</p>
                  <p>Fri–Sat 11 AM – 12 AM</p>
                  <p>Sun 11 AM – 11 PM</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-crust-paper py-16 sm:py-20">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <span className="eyebrow">Visit Us</span>
            <h2 className="section-heading mt-3">{mainBranch.name}</h2>
            <p className="mt-4 text-crust-black/70">
              Drop by our Sector 17 flagship for dine-in, or reach out to any of our three branches across
              Chandigarh and Mohali.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <MapSection query={`${mainBranch.name} — ${mainBranch.locality}, ${mainBranch.city}`} />
          </ScrollReveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <ScrollReveal>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-heading mt-3">Common Questions</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-10 max-w-3xl">
          <FAQAccordion items={faqs} />
        </ScrollReveal>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-xl2 border border-black/10 bg-white p-5 shadow-card transition-shadow hover:shadow-lift">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-crust-ember" />
      <div className="text-sm">
        <p className="font-semibold text-crust-black">{label}</p>
        <p className="text-crust-black/65">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}
