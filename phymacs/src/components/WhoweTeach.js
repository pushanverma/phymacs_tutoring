import Heading from "./common/Heading";
import CardGrid from "./common/CardGrid";
import Banner from "./common/Banner";
import { AUDIENCES } from "../constants/constants";
import "../styles/WhoweTeach.css";

/** "Who We Teach" audience grid + closing CTA banner. */
const WhoweTeach = () => (
  <div className="pm-whoweteach">
    <Heading
      lead="Who We"
      accent="Teach"
      sub="Every student arrives with different needs and goals. Our teaching adapts to each of them."
    />
    <CardGrid items={AUDIENCES} />
    <div className="pm-whoweteach__banner">
      <Banner
        title="Ready to transform your academic future?"
        body="Let's discuss how our tailored teaching can help you achieve your goals."
        label="Book a Free Consultation"
        to="/contact"
      />
    </div>
  </div>
);

export default WhoweTeach;
