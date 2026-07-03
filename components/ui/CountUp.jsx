"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
  className = "",
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(end * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
