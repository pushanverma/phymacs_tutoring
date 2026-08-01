import Icon from "./common/Icon";
import Button from "./common/Button";
import { HERO_CONTENT, HERO_HIGHLIGHTS } from "../constants/constants";
import "../styles/Header.css";

/** Home page hero: headline, CTAs and three floating highlight cards. */
const Header = () => (
  <div className="pm-hero">
    <div className="pm-hero__glow" />
    <div className="container pm-hero__inner">
      <div className="pm-hero__badge">
        <Icon name="globe" size={13} /> {HERO_CONTENT.badge}
      </div>
      <h1 className="pm-hero__title">
        {HERO_CONTENT.titleLine1}
        <br />
        <span className="pm-hero__accent">{HERO_CONTENT.titleAccent}</span>
      </h1>
      <p className="pm-hero__subtitle">{HERO_CONTENT.subtitle}</p>
      <div className="pm-hero__actions">
        <Button variant="ghost" to="/services">
          Explore Our Services
        </Button>
        <Button variant="primary" to="/contact">
          Book a Free Consultation
        </Button>
      </div>

      <div className="row pm-hero__highlights">
        {HERO_HIGHLIGHTS.map((c) => (
          <div className="col-12 col-md-4" key={c.title}>
            <div className="pm-hero__card">
              <div className="pm-hero__card-icon">
                <Icon name={c.icon} size={26} />
              </div>
              <div className="pm-hero__card-title">{c.title}</div>
              <div className="pm-hero__card-body">{c.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Header;
