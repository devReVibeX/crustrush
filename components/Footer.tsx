import Link from "next/link";
import { Flame, Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

const hours = [
  { day: "Mon – Thu", time: "11:00 AM – 11:00 PM" },
  { day: "Fri – Sat", time: "11:00 AM – 12:00 AM" },
  { day: "Sunday", time: "11:00 AM – 11:00 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-crust-black text-crust-cream">
      <div className="container-x grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold">
            <Flame className="h-6 w-6 text-crust-ember" />
            CRUST<span className="text-crust-ember">RUSH</span>
          </Link>
          <p className="mt-4 text-sm text-crust-cream/60">Crafted for Serious Cravings.</p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, href: "https://instagram.com/crustrush", label: "Instagram" },
              { icon: Facebook, href: "https://facebook.com/crustrush", label: "Facebook" },
              { icon: Youtube, href: "https://youtube.com/@crustrush", label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-crust-cream/20 transition-colors hover:bg-crust-ember hover:border-crust-ember"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-crust-gold">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-crust-cream/70 transition-colors hover:text-crust-ember">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-crust-gold">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-crust-cream/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-crust-ember" /> +91 xxxxx xxxxx
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-crust-ember" /> hello@crustrush.demo
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crust-ember" />
              SCO 42, Madhya Marg, Sector 17-C, Chandigarh 160017
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-crust-gold">Opening Hours</h4>
          <ul className="mt-5 space-y-3 text-sm text-crust-cream/70">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-crust-cream/50">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-crust-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-crust-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} CRUSTRUSH. Fictional demo brand for portfolio purposes.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-crust-ember">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-crust-ember">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
