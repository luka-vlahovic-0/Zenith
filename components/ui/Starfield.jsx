"use client";

import { useEffect, useState } from "react";

export default function Starfield({ count = 90 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 2.5,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* stars */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            opacity: 0.15,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* aurora blobs */}
      <div
        className="aurora-blob h-[480px] w-[480px] -left-40 top-[-120px]"
        style={{ background: "radial-gradient(circle, rgba(56,232,255,0.5), transparent 70%)" }}
      />
      <div
        className="aurora-blob h-[560px] w-[560px] right-[-160px] top-[15%]"
        style={{
          background: "radial-gradient(circle, rgba(139,124,246,0.5), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="aurora-blob h-[420px] w-[420px] left-[30%] bottom-[-180px]"
        style={{
          background: "radial-gradient(circle, rgba(244,114,182,0.35), transparent 70%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
