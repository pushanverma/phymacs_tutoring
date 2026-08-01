import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import BecomeTutorSection from "../components/BecomeTutorSection";

/** /become-a-tutor — perks + application form for prospective tutors. */
const BecomeTutor = () => (
  <>
    <PageHero
      title="Become a"
      accent="Tutor"
      sub="Join a passionate team shaping the next generation of scientists and mathematicians."
    />
    <Section bg="soft">
      <BecomeTutorSection />
    </Section>
  </>
);

export default BecomeTutor;
