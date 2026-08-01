import { useState } from "react";
import Chip from "./common/Chip";
import Button from "./common/Button";
import { TUTOR_PERKS } from "../constants/constants";
import "../styles/BecomeTutorSection.css";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

/** Perks list + tutor application form for the "Become a Tutor" page. */
const BecomeTutorSection = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application received. Connect a backend to route this to PhyMacs.");
    setForm(EMPTY_FORM);
  };

  return (
    <div className="row pm-tutor">
      <div className="col-12 col-lg-6">
        <h3 className="pm-tutor__heading">Why teach with PhyMacs?</h3>
        <div className="pm-tutor__perks">
          {TUTOR_PERKS.map((p) => (
            <div className="pm-tutor__perk" key={p.t}>
              <Chip icon={p.icon} color={p.accent} size={40} soft />
              <div>
                <div className="pm-tutor__perk-title">{p.t}</div>
                <div className="pm-tutor__perk-body">{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-12 col-lg-6">
        <form className="pm-tutor__form-card" onSubmit={handleSubmit}>
          <h3 className="pm-tutor__heading">Apply now</h3>
          <div className="pm-tutor__fields">
            <input className="pm-tutor__input" placeholder="Full name" value={form.name} onChange={update("name")} required />
            <input className="pm-tutor__input" type="email" placeholder="Email address" value={form.email} onChange={update("email")} required />
            <input className="pm-tutor__input" placeholder="Subject(s) you teach" value={form.subject} onChange={update("subject")} />
            <textarea
              className="pm-tutor__input pm-tutor__textarea"
              placeholder="Tell us about your experience"
              value={form.message}
              onChange={update("message")}
            />
            <Button full variant="primary" type="submit">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeTutorSection;
