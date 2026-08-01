import Button from "./Button";
import "../../styles/common/Banner.css";

/** Full-width gradient CTA banner dropped between sections. */
const Banner = ({ title, body, label, to }) => (
  <div className="pm-banner">
    <div className="pm-banner__glow pm-banner__glow--top" />
    <div className="pm-banner__glow pm-banner__glow--bottom" />
    <div className="pm-banner__content">
      <h3 className="pm-banner__title">{title}</h3>
      <p className="pm-banner__body">{body}</p>
      <Button variant="primary" to={to}>
        {label}
      </Button>
    </div>
  </div>
);

export default Banner;
