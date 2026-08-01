import Heading from "./common/Heading";
import CardGrid from "./common/CardGrid";
import Banner from "./common/Banner";
import { DIFFERENTIATORS } from "../constants/constants";
import "../styles/WhyChoosePhyMacs.css";

/** Differentiator grid explaining why to choose PhyMacs, + closing CTA banner. */
const WhyChoosePhyMacs = () => (
  <div className="pm-why-choose">
    <Heading
      lead="Why Choose"
      accent="PhyMacs"
      sub="Because understanding deserves more than guesswork. Our difference lies in the patience, expertise and personalisation we bring to every student."
    />
    <h4 className="pm-why-choose__subheading">What Makes Us Different?</h4>
    <CardGrid items={DIFFERENTIATORS} />
    <div className="pm-why-choose__banner">
      <Banner
        title="Ready to experience the difference?"
        body="Join the families who have transformed their child's confidence with PhyMacs. Your journey starts with a single conversation."
        label="Experience the PhyMacs Advantage"
        to="/contact"
      />
    </div>
  </div>
);

export default WhyChoosePhyMacs;
