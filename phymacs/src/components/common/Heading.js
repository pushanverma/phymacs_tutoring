import "../../styles/common/Heading.css";

/** Two-tone centred section heading with a short gold rule underneath. */
const Heading = ({ lead, accent, sub, light = false }) => (
  <div className={`pm-heading${light ? " pm-heading--light" : ""}`}>
    <h2 className="pm-heading__title">
      {lead} <span className="pm-heading__accent">{accent}</span>
    </h2>
    {sub && <p className="pm-heading__sub">{sub}</p>}
    <div className="pm-heading__rule" />
  </div>
);

export default Heading;
