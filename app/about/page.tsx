import Image from "next/image";
import type { Metadata } from "next";
import { ChefHat, Leaf, Sprout, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import StatBlock from "@/components/StatBlock";

export const metadata: Metadata = {
  title: "About | CRUSTRUSH",
  description: "The story, philosophy and people behind CRUSTRUSH — Chandigarh's premium pizza and fast food brand.",
};

const team = [
  {
    name: "Arjun Kapoor",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Chef Rohan Mehta",
    role: "Head Chef",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Simran Kaur",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
];

const pillars = [
  { icon: Sprout, title: "Our Philosophy", text: "Slow-proofed dough, honest ingredients, and food made the way we'd want to eat it ourselves." },
  { icon: Leaf, title: "Our Ingredients", text: "Locally sourced produce, quality cheeses and house-made sauces — nothing frozen, nothing shortcut." },
  { icon: ChefHat, title: "Our Kitchen", text: "Open kitchens across all branches, built around speed without ever compromising on craft." },
  { icon: Users, title: "Our Team", text: "A crew of food-first people who care as much about your order as you do." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-crust-charcoal py-16 sm:py-20">
        <div className="container-x text-center">
          <ScrollReveal>
            <span className="eyebrow text-crust-gold">About CRUSTRUSH</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-crust-cream sm:text-5xl">Our Story</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ScrollReveal className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1200&auto=format&fit=crop"
              alt="CRUSTRUSH kitchen team preparing fresh pizza"
              fill
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed text-crust-black/75">
              CRUSTRUSH began in 2019 in a small Sector 17 kitchen with one simple goal: build a fast-food brand
              that never treats "fast" as an excuse for "average." What started as a single hand-tossed pizza
              counter has grown into a Chandigarh favorite for pizzas, burgers, sides and desserts.
            </p>
            <p className="mt-5 leading-relaxed text-crust-black/70">
              Every recipe on our menu has been tested, tasted and reworked dozens of times before it ever reaches
              your table. We believe premium food shouldn't require a formal sit-down — it should show up hot,
              fresh and full of flavor, wherever you are.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-crust-paper py-16 sm:py-20">
        <div className="container-x grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <div className="card-surface h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crust-ember/10">
                  <p.icon className="h-6 w-6 text-crust-ember" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-crust-black/65">{p.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <ScrollReveal><StatBlock value="25+" label="Menu Items" /></ScrollReveal>
          <ScrollReveal delay={0.06}><StatCounter value={3} label="Locations" /></ScrollReveal>
          <ScrollReveal delay={0.12}><StatBlock value="4.8/5" label="Demo Rating" /></ScrollReveal>
          <ScrollReveal delay={0.18}><StatBlock value="30–40 min" label="Avg. Delivery" /></ScrollReveal>
        </div>
      </section>

      <section className="bg-crust-charcoal py-16 sm:py-20">
        <div className="container-x">
          <ScrollReveal>
            <span className="eyebrow text-crust-gold">Meet The Team</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-crust-cream sm:text-4xl">
              The People Behind CRUSTRUSH
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-crust-cream/40">Fictional demo profiles</p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="overflow-hidden rounded-xl2 bg-crust-cream/5">
                  <div className="relative aspect-[4/5] w-full">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-display text-lg font-semibold text-crust-cream">{member.name}</h3>
                    <p className="text-sm text-crust-gold">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
