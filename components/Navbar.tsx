"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Flame, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/CartProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-crust-cream/95 shadow-card backdrop-blur" : "bg-crust-cream/60 backdrop-blur-sm"
      }`}
    >
      <nav className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-crust-black">
          <Flame className="h-6 w-6 text-crust-ember" aria-hidden="true" />
          CRUST<span className="text-crust-ember">RUSH</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wide text-crust-black/80 transition-colors hover:text-crust-ember focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crust-ember"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={openCart} className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 transition hover:-translate-y-0.5 hover:border-crust-ember" aria-label={`Open cart${itemCount ? `, ${itemCount} items` : ""}`}>
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-crust-ember px-1 text-[10px] font-bold text-white">{itemCount}</span>}
          </button>
          <Link href="/menu" className="btn-primary">Order Now</Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={openCart} className="relative rounded-full border border-black/10 p-2.5 text-crust-black hover:bg-black/5" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-crust-ember px-1 text-[10px] font-bold text-white">{itemCount}</span>}
          </button>
          <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-black/10 p-2.5 text-crust-black transition-colors hover:bg-crust-black hover:text-crust-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/10 bg-crust-cream px-5 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-crust-black transition-colors hover:bg-black/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/menu" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
