import Chip from "./Chip";
import "../../styles/common/CardGrid.css";

/** Responsive 3-up (desktop) / 2-up (tablet) / 1-up (phone) icon-card grid. */
const CardGrid = ({ items }) => (
  <div className="row pm-card-grid">
    {items.map((c) => (
      <div className="col-12 col-sm-6 col-lg-4" key={c.title}>
        <div className="pm-card-grid__card">
          <Chip icon={c.icon} color={c.accent} size={44} />
          <h3 className="pm-card-grid__title">{c.title}</h3>
          <div className="pm-card-grid__sub" style={{ color: c.accent }}>
            {c.sub}
          </div>
          <p className="pm-card-grid__body">{c.body}</p>
        </div>
      </div>
    ))}
  </div>
);

export default CardGrid;
