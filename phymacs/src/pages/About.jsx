import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import About from "../components/About";
import { Helmet } from "react-helmet-async";

/** /about — company story, mission/vision and commitment pillars. */

const AboutPage = () => (
  <>
    <Helmet>
      <title>
        About PhyMacs Tutoring | Personalized Learning & Expert Tutors
      </title>
      <meta
        name="description"
        content="Learn about PhyMacs Tutoring and our approach to personalized education. We connect students with experienced tutors to provide effective, supportive, and engaging learning. "
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://phymacstutoring.com/about" />
      <meta
        property="og:title"
        content=" About PhyMacs Tutoring | Personalized Learning & Expert Tutors "
      />
      <meta
        property="og:description"
        content="Learn about PhyMacs Tutoring and our approach to personalized education. We connect students with experienced tutors to provide effective, supportive, and engaging learning. "
      />
      <meta property="og:site_name" content="PhyMacs Tutoring" />
      <meta property="og:image" content="https://www.phymacstutoring.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="canonical" href="https://www.phymacstutoring.com" />
    </Helmet>

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
