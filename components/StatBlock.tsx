export default function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-crust-ember sm:text-5xl">{value}</div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-crust-black/60">{label}</div>
    </div>
  );
}
