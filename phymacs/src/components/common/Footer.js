import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import Button from "./Button";
import { SOCIALS, CONTACT_INFO, FOOTER_LINKS } from "../../constants/constants";
import "../../styles/common/Footer.css";

const Footer = () => (
  <footer className="pm-footer">
    <div className="container pm-footer__inner">
      <div className="row gy-4">
        <div className="col-12 col-lg-4">
          <Logo light />
          <p className="pm-footer__blurb">
            Expert Physics, Chemistry, Maths &amp; Biology tuition — online worldwide and in-person across the UK.
          </p>
          <div className="pm-footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="pm-footer__social">
                <SocialIcon type={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="col-6 col-lg-2">
          <h4 className="pm-footer__heading">Explore</h4>
          {FOOTER_LINKS.explore.map((l) => (
            <Link key={l.to} to={l.to} className="pm-footer__link">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="col-6 col-lg-2">
          <h4 className="pm-footer__heading">Learn</h4>
          {FOOTER_LINKS.learn.map((l) => (
            <Link key={l.to} to={l.to} className="pm-footer__link">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="col-12 col-lg-4">
          <h4 className="pm-footer__heading">Reach Us</h4>
          <p className="pm-footer__address">{CONTACT_INFO.address}</p>
          <Button to="/contact" variant="primary" className="pm-footer__cta">
            Let's Talk
          </Button>
        </div>
      </div>

      <div className="pm-footer__bottom">© {new Date().getFullYear()} PhyMacs Tutoring. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
