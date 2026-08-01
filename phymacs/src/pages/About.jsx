import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import About from "../components/About";

/** /about — company story, mission/vision and commitment pillars. */
const AboutPage = () => (
  <>
    <PageHero
      title="About"
      accent="PhyMacs"
      sub="Expert Physics, Chemistry, Maths & Biology tuition — online worldwide and in-person across the UK."
    />
    <Section bg="soft">
      <About />
    </Section>
  </>
);

export default AboutPage;
