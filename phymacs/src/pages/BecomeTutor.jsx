import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import BecomeTutorSection from "../components/BecomeTutorSection";
import { Helmet } from "react-helmet-async";

/** /become-a-tutor — perks + application form for prospective tutors. */

const BecomeTutor = () => (
  <>
    <Helmet>
      <title>Become a Tutor | Join PhyMacs Tutoring</title>
      <meta
        name="description"
        content="Join PhyMacs Tutoring as a tutor and help students achieve their academic goals. Learn about becoming a tutor, sharing your expertise, and growing with our tutoring community. "
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://phymacstutoring.com/become-a-tutor"
      />
      <meta
        property="og:title"
        content=" Become a Tutor | Join PhyMacs Tutoring "
      />
      <meta
        property="og:description"
        content="Join PhyMacs Tutoring as a tutor and help students achieve their academic goals. Learn about becoming a tutor, sharing your expertise, and growing with our tutoring community."
      />
      <meta property="og:site_name" content="PhyMacs Tutoring" />
      <meta
        property="og:image"
        content="https://www.phymacstutoring.com/og-image.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="canonical" href="https://www.phymacstutoring.com" />
    </Helmet>

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
