import Chip from "./common/Chip";
import Button from "./common/Button";
import Heading from "./common/Heading";
import { SERVICES } from "../constants/constants";
import "../styles/TeachingMode.css";

/** "How We Teach" teaser cards for the two service formats. */
const TeachingMode = ({ showHeading = false }) => (
  <div className="pm-teaching-mode">
    {showHeading && (
      <Heading lead="How We" accent="Teach" sub="Two flexible ways to learn — choose what fits your child best." />
    )}
    <div className="row pm-teaching-mode__row">
      {Object.values(SERVICES).map((s) => (
        <div className="col-12 col-md-6" key={s.key}>
          <div className="pm-teaching-mode__card">
            <Chip icon={s.icon} color={s.accent} size={48} soft />
            <h3 className="pm-teaching-mode__title">{s.title}</h3>
            <div className="pm-teaching-mode__tagline">{s.tagline}</div>
            <p className="pm-teaching-mode__intro">{s.intro}</p>
            <Button variant="outline" to={`/services/${s.slug}`}>
              Learn more
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TeachingMode;
