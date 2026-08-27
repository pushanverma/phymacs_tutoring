import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import TeachersSection from "../components/TeachersSection";
import { Helmet } from "react-helmet-async";

/** /teachers — meet the tutors. */
const Teachers = () => (
  <>
    <Helmet>
      <title>Find Expert Tutors & Teachers | PhyMacs Tutoring</title>
      <meta
        name="description"
        content="Meet the experienced tutors at PhyMacs Tutoring. Explore our teachers, their expertise, and find the right tutor to support your learning goals."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://phymacstutoring.com/teachers"
      />
      <meta
        property="og:title"
        content="Find Expert Tutors & Teachers | PhyMacs Tutoring "
      />
      <meta
        property="og:description"
        content="Meet the experienced tutors at PhyMacs Tutoring. Explore our teachers, their expertise, and find the right tutor to support your learning goals."
      />
      <meta property="og:site_name" content="PhyMacs Tutoring" />
      <meta property="og:image" content="https://www.phymacstutoring.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="canonical" href="https://www.phymacstutoring.com" />
    </Helmet>
    <PageHero
      title="Know Our"
      accent="Teachers"
      sub="Meet the specialists who make learning click."
    />
    <Section bg="soft">
      <TeachersSection />
    </Section>
  </>
);

export default Teachers;
