import Chip from "./common/Chip";
import Icon from "./common/Icon";
import Button from "./common/Button";
import "../styles/ServiceDetail.css";

/** Feature list + step-by-step process for a single service (Online / Home). */
const ServiceDetail = ({ service }) => (
  <div className="row pm-service-detail">
    <div className="col-12 col-lg-6">
      <div className="pm-service-detail__head">
        <Chip icon={service.icon} color={service.accent} size={40} soft />
        <div>
          <h3 className="pm-service-detail__heading">What's included</h3>
          <div className="pm-service-detail__tagline">{service.tagline}</div>
        </div>
      </div>
      <div className="pm-service-detail__features">
        {service.features.map((f) => (
          <div className="pm-service-detail__feature" key={f}>
            <span className="pm-service-detail__check" style={{ color: service.accent }}>
              <Icon name="check" size={17} />
            </span>
            <span>{f}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="col-12 col-lg-6">
      <h3 className="pm-service-detail__heading pm-service-detail__heading--steps">How it works</h3>
      <div className="pm-service-detail__steps">
        {service.steps.map((st, i) => (
          <div className="pm-service-detail__step" key={st.t}>
            <div className="pm-service-detail__step-num">{i + 1}</div>
            <div>
              <div className="pm-service-detail__step-title">{st.t}</div>
              <div className="pm-service-detail__step-body">{st.d}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pm-service-detail__cta">
        <Button variant="primary" to="/contact">
          Enquire About {service.title}
        </Button>
      </div>
    </div>
  </div>
);

export default ServiceDetail;
