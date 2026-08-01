import Banner from "./common/Banner";
import { TEACHERS } from "../constants/constants";
import "../styles/TeachersSection.css";

/** Tutor profile cards + closing CTA banner for the "Know Our Teachers" page. */
const TeachersSection = () => (
  <>
    <div className="row pm-teachers">
      {TEACHERS.map((tc) => (
        <div className="col-12 col-sm-6 col-lg-4" key={tc.name}>
          <div className="pm-teachers__card">
            <div className="pm-teachers__avatar">{tc.initials}</div>
            <h3 className="pm-teachers__name">{tc.name}</h3>
            <div className="pm-teachers__role" style={{ color: tc.accent }}>
              {tc.role}
            </div>
            <div className="pm-teachers__subjects">{tc.subjects}</div>
            <p className="pm-teachers__bio">{tc.bio}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="pm-teachers__banner">
      <Banner
        title="Want to work with our team?"
        body="Book a free consultation and we'll match your child with the right tutor."
        label="Book a Free Consultation"
        to="/contact"
      />
    </div>
  </>
);

export default TeachersSection;
