"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatCounter({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      start = Math.floor(progress * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-4xl font-bold text-crust-ember sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-crust-black/60">{label}</div>
    </motion.div>
  );
}
