export default function Logo({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="zen-logo-grad" x1="4" y1="44" x2="44" y2="4">
          <stop offset="0%" stopColor="#38e8ff" />
          <stop offset="55%" stopColor="#8b7cf6" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      {/* summit peaks */}
      <path
        d="M4 38 L18 14 L26 27 L32 18 L44 38 Z"
        stroke="url(#zen-logo-grad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="rgba(139,124,246,0.12)"
      />
      {/* zenith star above the peak */}
      <circle cx="18" cy="7" r="2.4" fill="#38e8ff" />
      <path
        d="M18 1.5 V4 M18 10 V12.5 M12.5 7 H15 M21 7 H23.5"
        stroke="#38e8ff"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
