import Icon from "./common/Icon";
import Button from "./common/Button";
import { PRICING_PLANS } from "../constants/constants";
import "../styles/PricingSection.css";

/** Three-tier pricing card grid. */
const PricingSection = () => (
  <div className="row pm-pricing">
    {PRICING_PLANS.map((p) => (
      <div className="col-12 col-lg-4" key={p.name}>
        <div className={`pm-pricing__card${p.highlight ? " pm-pricing__card--highlight" : ""}`}>
          {p.highlight && <div className="pm-pricing__badge">POPULAR</div>}
          <h3 className="pm-pricing__name">{p.name}</h3>
          <div className="pm-pricing__price">
            <span className="pm-pricing__amount">{p.price}</span>
            <span className="pm-pricing__period">{p.period}</span>
          </div>
          <div className="pm-pricing__divider" />
          <div className="pm-pricing__features">
            {p.features.map((ft) => (
              <div className="pm-pricing__feature" key={ft}>
                <span className="pm-pricing__check">
                  <Icon name="check" size={15} />
                </span>
                <span>{ft}</span>
              </div>
            ))}
          </div>
          <Button full variant={p.highlight ? "primary" : "outline"} to="/contact">
            Choose Plan
          </Button>
        </div>
      </div>
    ))}
  </div>
);

export default PricingSection;
