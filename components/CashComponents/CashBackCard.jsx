export default function CashBackCard({ icon, color = "#38e8ff", header, description }) {
  return (
    <div className="glass glass-hover group h-full p-7">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition-transform duration-500 group-hover:scale-110"
        style={{ background: `${color}14` }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} aria-hidden="true">
          {icon}
        </svg>
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-ink">{header}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}
