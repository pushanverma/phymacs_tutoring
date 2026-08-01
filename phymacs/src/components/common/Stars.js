import "../../styles/common/Stars.css";

/** Star rating display, e.g. <Stars n={5} />. */
const Stars = ({ n = 5 }) => (
  <div className="pm-stars" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`pm-stars__star${i < n ? " pm-stars__star--filled" : ""}`}>
        ★
      </span>
    ))}
  </div>
);

export default Stars;
