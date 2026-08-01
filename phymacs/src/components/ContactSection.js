import { useState } from "react";
import Icon from "./common/Icon";
import SocialIcon from "./common/SocialIcon";
import Button from "./common/Button";
import { SOCIALS, CONTACT_INFO } from "../constants/constants";
import "../styles/ContactSection.css";

const EMPTY_FORM = { name: "", email: "", phone: "", subject: "", message: "" };

/** Enquiry form, social links and embedded map for the Contact page. */
const ContactSection = () => {
  const [form, setForm] = useState(EMPTY_FORM);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent. Connect a backend to route this to PhyMacs.");
    setForm(EMPTY_FORM);
  };

  return (
    <div className="row pm-contact">
      <div className="col-12 col-lg-6">
        <form className="pm-contact__form-card" onSubmit={handleSubmit}>
          <h3 className="pm-contact__heading">Send us a message</h3>
          <div className="pm-contact__fields">
            <input className="pm-contact__input" placeholder="Full name" value={form.name} onChange={update("name")} required />
            <div className="row g-2">
              <div className="col-12 col-sm-6">
                <input className="pm-contact__input" type="email" placeholder="Email" value={form.email} onChange={update("email")} required />
              </div>
              <div className="col-12 col-sm-6">
                <input className="pm-contact__input" placeholder="Phone" value={form.phone} onChange={update("phone")} />
              </div>
            </div>
            <input className="pm-contact__input" placeholder="Subject of interest" value={form.subject} onChange={update("subject")} />
            <textarea
              className="pm-contact__input pm-contact__textarea"
              placeholder="Your message"
              value={form.message}
              onChange={update("message")}
              required
            />
            <Button full variant="primary" type="submit">
              Send Message
            </Button>
          </div>
        </form>

        <div className="pm-contact__socials-card">
          <h4 className="pm-contact__heading pm-contact__heading--sm">Connect with us</h4>
          <div className="row g-2">
            {SOCIALS.map((s) => (
              <div className="col-6 col-lg-3" key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="pm-contact__social"
                  style={{ background: `${s.color}12`, color: s.color, borderColor: `${s.color}26` }}
                >
                  <SocialIcon type={s.icon} size={20} />
                  <span>{s.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-6">
        <div className="pm-contact__map-card">
          <iframe
            title="PhyMacs Location - Abingdon"
            src={CONTACT_INFO.mapSrc}
            className="pm-contact__map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="pm-contact__info-card">
          <div className="pm-contact__info-row">
            <span className="pm-contact__info-icon">
              <Icon name="pin" size={22} />
            </span>
            <div>
              <div className="pm-contact__info-title">Visit us (in-person tuition)</div>
              <div className="pm-contact__info-body">{CONTACT_INFO.address}</div>
            </div>
          </div>
          <div className="pm-contact__info-divider">
            <div className="pm-contact__info-row">
              <span className="pm-contact__info-icon">
                <Icon name="globe" size={19} />
              </span>
              <span className="pm-contact__info-line">
                <strong>Online:</strong> available worldwide, any timezone.
              </span>
            </div>
            <div className="pm-contact__info-row">
              <span className="pm-contact__info-icon">
                <Icon name="house" size={19} />
              </span>
              <span className="pm-contact__info-line">
                <strong>Offline:</strong> face-to-face across the UK.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
