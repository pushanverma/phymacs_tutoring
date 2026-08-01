const PATHS = {
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" /></>,
  house: <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  atom: <><circle cx="12" cy="12" r="2" /><ellipse cx="12" cy="12" rx="9" ry="4" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" /></>,
  flask: <><path d="M9 3h6M10 3v6l-6 9a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3l-6-9V3" /><path d="M7 15h10" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></>,
  dna: <><path d="M5 3c0 6 14 6 14 12M19 3c0 6-14 6-14 12M5 21c0-2 14-2 14 0" /><path d="M7 7h10M7 17h10" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></>,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  crown: <path d="M3 8l3.5 4L12 5l5.5 7L21 8v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />,
  heart: <path d="M12 20s-7-4.5-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.5-7 9-7 9z" />,
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" /><circle cx="12" cy="12" r="2.5" /></>,
  book: <><path d="M4 4a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z" /><path d="M4 18h15" /></>,
  trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0z" /><path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3" /><path d="M10 13v3h4v-3M8 20h8" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  handshake: <><path d="M11 17l-2 2-4-4 4-4 3 2 3-2 4 4-4 4-2-2" /><path d="M3 11l4-4M21 11l-4-4" /></>,
  bulb: <><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3 11v2h6v-2a6 6 0 0 0-3-11z" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  check: <path d="M20 6L9 17l-5-5" />,
  arrowL: <path d="M15 18l-6-6 6-6" />,
  arrowR: <path d="M9 18l6-6-6-6" />,
};

/** Inline SVG icon set — pass any key from PATHS as `name`. */
const Icon = ({ name, size = 22, className }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {PATHS[name] || PATHS.check}
  </svg>
);

export default Icon;
