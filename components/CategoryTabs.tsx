"use client";

const tabs = ["All", "Pizza", "Burgers", "Sides", "Desserts", "Beverages"];

export default function CategoryTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
            active === t
              ? "border-crust-ember bg-crust-ember text-crust-cream shadow-card"
              : "border-black/10 bg-white text-crust-black/70 hover:border-crust-ember hover:text-crust-ember"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
