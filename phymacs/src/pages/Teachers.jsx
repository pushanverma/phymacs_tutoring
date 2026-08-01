import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import TeachersSection from "../components/TeachersSection";

/** /teachers — meet the tutors. */
const Teachers = () => (
  <>
    <PageHero title="Know Our" accent="Teachers" sub="Meet the specialists who make learning click." />
    <Section bg="soft">
      <TeachersSection />
    </Section>
  </>
);

export default Teachers;
