import { Truck } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-crust-black py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-crust-cream sm:text-xs">
      <div className="container-x flex items-center justify-center gap-2">
        <Truck className="h-3.5 w-3.5 text-crust-gold" aria-hidden="true" />
        <span>Free delivery on orders above ₹499 · Sector 17 · Sector 35 · Mohali</span>
      </div>
    </div>
  );
}
