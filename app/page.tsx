import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Leaf, Sparkles, Star, Timer, UtensilsCrossed, Phone, MapPin, Navigation } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import FAQAccordion from "@/components/FAQAccordion";
import MapSection from "@/components/MapSection";
import { menuItems, categories, testimonials, faqs, branches } from "@/lib/data";

const popularItems = menuItems.filter((i) => i.popular).slice(0, 4);
const mainBranch = branches[0];

const features = [
  { icon: Sparkles, title: "Fresh Every Time", text: "Dough made in-house daily, toppings prepped fresh every morning." },
  { icon: Leaf, title: "Premium Ingredients", text: "Sourced cheeses, sauces and produce — no shortcuts, ever." },
  { icon: Timer, title: "Fast Delivery", text: "Hot, fresh orders at your door in 30–40 minutes, on average." },
  { icon: UtensilsCrossed, title: "Made to Order", text: "Every pizza is hand-stretched and fired only after you order." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-crust-charcoal">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=1800&auto=format&fit=crop"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-crust-charcoal via-crust-charcoal/80 to-crust-charcoal/40" />

        <div className="container-x relative py-24 sm:py-32 lg:py-36">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="eyebrow text-crust-gold">CRUSTRUSH · Sector 17, Chandigarh</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-crust-cream sm:text-6xl lg:text-7xl">
                Big Flavor.
                <br />
                Serious Cravings.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-crust-cream/75">
                Handcrafted pizzas, loaded sides and comfort food made fresh for Chandigarh.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/menu" className="btn-primary">
                  Order Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/menu" className="btn-light">
                  View Menu
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { icon: Sparkles, text: "Freshly Made" },
                  { icon: Clock3, text: "30–40 Min Delivery" },
                  { icon: CheckCircle2, text: "100% Quality Ingredients" },
                ].map((t) => (
                  <div key={t.text} className="flex items-center gap-2 text-sm font-semibold text-crust-cream/85">
                    <t.icon className="h-4 w-4 text-crust-gold" /> {t.text}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* POPULAR ITEMS */}
      <section className="container-x py-20 sm:py-28">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Fan Favorites</span>
              <h2 className="section-heading mt-3">Popular Right Now</h2>
            </div>
            <Link href="/menu" className="btn-secondary">
              Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularItems.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <ProductCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-crust-paper py-20 sm:py-28">
        <div className="container-x">
          <ScrollReveal>
            <span className="eyebrow">Explore</span>
            <h2 className="section-heading mt-3">Shop By Category</h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((c, i) => (
              <ScrollReveal key={c.slug} delay={i * 0.06}>
                <Link
                  href={`/menu?category=${c.slug}`}
                  className="group relative block aspect-square overflow-hidden rounded-xl2 shadow-card transition-shadow hover:shadow-lift"
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crust-black/80 via-crust-black/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-display text-lg font-bold text-crust-cream">
                    {c.name}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITED TIME OFFER */}
      <section className="container-x py-20 sm:py-28">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-xl2 bg-crust-black px-6 py-14 sm:px-14 sm:py-20">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-crust-ember/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-crust-gold/10 blur-3xl" />
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="eyebrow text-crust-gold">Limited Time Offer</span>
                <h2 className="mt-3 font-display text-4xl font-bold text-crust-cream sm:text-5xl">Weekend Feast</h2>
                <ul className="mt-5 space-y-2 text-crust-cream/75">
                  <li>2 Medium Pizzas</li>
                  <li>+ Garlic Bread</li>
                  <li>+ 2 Drinks</li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-5 lg:items-end">
                <div className="font-display text-5xl font-bold text-crust-cream">
                  ₹799<span className="ml-2 text-lg font-normal text-crust-cream/40 line-through">₹1,096</span>
                </div>
                <Link href="/offers" className="btn-primary">
                  Claim Offer <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* WHY CRUSTRUSH */}
      <section className="bg-crust-paper py-20 sm:py-28">
        <div className="container-x">
          <ScrollReveal>
            <span className="eyebrow">Why CRUSTRUSH</span>
            <h2 className="section-heading mt-3">The Difference Is In The Details</h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="card-surface h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crust-ember/10">
                    <f.icon className="h-6 w-6 text-crust-ember" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-crust-black/65">{f.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD EXPERIENCE */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ScrollReveal className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
              alt="Chef preparing a fresh handmade pizza at CRUSTRUSH kitchen"
              fill
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <span className="eyebrow">The Food Experience</span>
            <h2 className="section-heading mt-3">Every Order Starts With Real Craft</h2>
            <p className="mt-5 text-crust-black/70">
              At CRUSTRUSH, nothing comes pre-made. Our dough proofs for over 24 hours, our sauces are simmered
              in-house, and every topping is portioned by hand. It's slower than the fast-food norm — but it's
              the only way we know how to make food worth craving.
            </p>
            <p className="mt-4 text-crust-black/70">
              From our Sector 17 kitchen to your table, we obsess over the details so every bite hits the same
              high bar, every single time.
            </p>
            <Link href="/about" className="btn-secondary mt-7">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-crust-charcoal py-20 sm:py-28">
        <div className="container-x">
          <ScrollReveal>
            <span className="eyebrow text-crust-gold">Customer Love</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-crust-cream sm:text-4xl lg:text-5xl">
              What Chandigarh Is Saying
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-crust-cream/40">Fictional demo testimonials</p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="h-full rounded-xl2 bg-crust-cream/5 p-6 backdrop-blur">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-crust-gold text-crust-gold" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-crust-cream/80">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-5 font-display text-sm font-semibold text-crust-cream">{t.name}</p>
                  <p className="text-xs text-crust-cream/40">{t.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <span className="eyebrow">Find Us</span>
            <h2 className="section-heading mt-3">{mainBranch.name}</h2>
            <div className="mt-6 space-y-4 text-crust-black/75">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crust-ember" />
                {mainBranch.addressLines.join(", ")}, {mainBranch.city} {mainBranch.postalCode}
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-crust-ember" /> {mainBranch.phone}
              </p>
              <p className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-crust-ember" /> 11:00 AM – 11:00 PM
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mainBranch.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Get Directions <Navigation className="h-4 w-4" />
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <MapSection query={`${mainBranch.name} — ${mainBranch.locality}, ${mainBranch.city}`} />
          </ScrollReveal>
        </div>
      </section>

      {/* DELIVERY CTA */}
      <section className="bg-crust-ember py-20 text-center sm:py-24">
        <div className="container-x">
          <ScrollReveal>
            <h2 className="font-display text-4xl font-bold text-crust-cream sm:text-5xl">Craving something?</h2>
            <p className="mx-auto mt-4 max-w-lg text-crust-cream/85">
              Your next favorite meal is only a few clicks away.
            </p>
            <Link href="/menu" className="btn-light mt-8 inline-flex">
              Order Now <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20 sm:py-28">
        <ScrollReveal>
          <span className="eyebrow">Good To Know</span>
          <h2 className="section-heading mt-3">Frequently Asked Questions</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mt-10 max-w-3xl">
          <FAQAccordion items={faqs} />
        </ScrollReveal>
      </section>
    </>
  );
}
