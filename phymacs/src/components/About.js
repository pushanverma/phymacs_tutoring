import Icon from "./common/Icon";
import Heading from "./common/Heading";
import { ABOUT_CONTENT, PILLARS } from "../constants/constants";
import "../styles/About.css";

/**
 * Mission/vision/pillars content block. `showHeading` is false on the
 * About page (which already has a PageHero) and true on the Home page.
 */
const About = ({ showHeading = false }) => (
  <div className="pm-about">
    {showHeading && <Heading lead={ABOUT_CONTENT.heading.lead} accent={ABOUT_CONTENT.heading.accent} />}

    <div className="row pm-about__row">
      <div className="col-12 col-lg-7 pm-about__text">
        {ABOUT_CONTENT.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="col-12 col-lg-5">
        <div className="pm-about__card">
          <h4 className="pm-about__card-title">Our Mission</h4>
          <p className="pm-about__card-text">{ABOUT_CONTENT.mission}</p>
          <div className="pm-about__divider" />
          <h4 className="pm-about__card-title">Our Vision</h4>
          <p className="pm-about__card-text pm-about__card-text--last">{ABOUT_CONTENT.vision}</p>
        </div>
      </div>
    </div>

    <h4 className="pm-about__pillars-intro">{ABOUT_CONTENT.pillarsIntro}</h4>
    <div className="row pm-about__pillars">
      {PILLARS.map((p) => (
        <div className="col-6 col-lg-3" key={p.title}>
          <div className="pm-about__pillar">
            <div className="pm-about__pillar-icon">
              <Icon name={p.icon} size={22} />
            </div>
            <div className="pm-about__pillar-title">{p.title}</div>
            <div className="pm-about__pillar-body">{p.body}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default About;
