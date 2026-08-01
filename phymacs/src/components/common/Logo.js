import "../../styles/common/Logo.css";

/** PhyMacs wordmark + emblem. `light` renders the on-navy colourway. */
const Logo = ({ light = false }) => (
  <span className="pm-logo">
    <svg width="34" height="34" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill={light ? "var(--pm-gold)" : "var(--pm-navy)"} />
      <path d="M24 13l13 5.5-13 5.5-13-5.5L24 13z" fill={light ? "var(--pm-navy)" : "var(--pm-gold)"} />
      <path
        d="M15 22v6c0 2.6 4 4.5 9 4.5s9-1.9 9-4.5v-6l-9 3.8L15 22z"
        fill={light ? "var(--pm-navy-dark)" : "var(--pm-gold-light)"}
      />
    </svg>
    <span className={`pm-logo__text${light ? " pm-logo__text--light" : ""}`}>
      Phy<span className="pm-logo__accent">Macs</span>
    </span>
  </span>
);

export default Logo;
