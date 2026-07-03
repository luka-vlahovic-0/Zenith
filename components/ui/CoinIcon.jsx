const COINS = {
  eth: {
    bg: "#627eea",
    symbol: (
      <path
        d="M16 5 L16 13.8 L23 17 Z M16 5 L9 17 L16 13.8 Z M16 27 L16 19.5 L23 18.5 Z M16 27 L9 18.5 L16 19.5 Z"
        fill="#fff"
        fillOpacity="0.95"
      />
    ),
  },
  btc: {
    bg: "#f7931a",
    symbol: (
      <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="sans-serif">
        ₿
      </text>
    ),
  },
  usdc: {
    bg: "#2775ca",
    symbol: (
      <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="sans-serif">
        $
      </text>
    ),
  },
  zeth: {
    bg: "url(#coin-zeth-grad)",
    symbol: (
      <>
        <defs>
          <linearGradient id="coin-zeth-grad" x1="0" y1="32" x2="32" y2="0">
            <stop offset="0%" stopColor="#38e8ff" />
            <stop offset="100%" stopColor="#8b7cf6" />
          </linearGradient>
        </defs>
        <text x="16" y="21.5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#05060f" fontFamily="sans-serif">
          zE
        </text>
      </>
    ),
  },
  sol: {
    bg: "#1c1633",
    symbol: (
      <g stroke="none">
        <rect x="9" y="10" width="14" height="3" rx="1" fill="#14f195" transform="skewX(-12)" />
        <rect x="12" y="15" width="14" height="3" rx="1" fill="#9945ff" transform="skewX(-12)" />
        <rect x="9" y="20" width="14" height="3" rx="1" fill="#14f195" transform="skewX(-12)" />
      </g>
    ),
  },
  dai: {
    bg: "#f5ac37",
    symbol: (
      <text x="16" y="22" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="sans-serif">
        ◈
      </text>
    ),
  },
};

export default function CoinIcon({ coin = "eth", size = 32, className = "", style }) {
  const c = COINS[coin] || COINS.eth;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" fill={c.bg} stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      {c.symbol}
    </svg>
  );
}
