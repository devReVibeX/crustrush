"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Copy, Tag } from "lucide-react";
import { Offer } from "@/lib/types";

export default function OfferCard({ offer }: { offer: Offer }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="card-surface flex flex-col overflow-hidden lg:flex-row">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden lg:aspect-auto lg:w-72">
        <Image src={offer.image} alt={offer.title} fill sizes="(max-width: 1024px) 100vw, 288px" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-bold">{offer.title}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-crust-ember">{offer.validity}</p>
          </div>
          <div className="text-right">
            <div className="font-display text-3xl font-bold text-crust-black">₹{offer.price}</div>
            {offer.originalPrice && (
              <div className="text-sm text-crust-black/40 line-through">₹{offer.originalPrice}</div>
            )}
          </div>
        </div>
        <p className="mt-4 text-sm text-crust-black/65">{offer.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {offer.includes.map((inc) => (
            <li key={inc} className="rounded-full bg-crust-paper px-3 py-1 text-xs font-semibold text-crust-black/70">
              {inc}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button className="btn-primary">
            <Tag className="h-4 w-4" /> Claim Offer
          </button>
          <button
            onClick={() => {
              navigator.clipboard?.writeText(offer.code);
              setCopied(true);
              setTimeout(() => setCopied(false), 1800);
            }}
            className="flex items-center gap-2 rounded-full border border-dashed border-black/20 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-crust-black/70 transition-colors hover:border-crust-ember hover:text-crust-ember"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : offer.code}
          </button>
        </div>
      </div>
    </div>
  );
}
