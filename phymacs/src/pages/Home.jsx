import Header from "../components/Header";
import About from "../components/About";
import Subjects from "../components/Subjects";
import TeachingMode from "../components/TeachingMode";
import WhoweTeach from "../components/WhoweTeach";
import WhyChoosePhyMacs from "../components/WhyChoosePhyMacs";
import Testimonials from "../components/Testimonials";
import NewsInsights from "../components/NewsInsights";
import FAQ from "../components/FAQ";
import Section from "../components/common/Section";
import { Helmet } from "react-helmet-async";

/** Landing page: composes every marketing section in order. */
const Home = () => (
  <>
    <Helmet>
      <title>Online Tutoring Services for Students | PhyMacs Tutoring </title>
      <meta
        name="description"
        content="Get personalized tutoring with experienced tutors at PhyMacs. Explore online tutoring services designed to help students understand concepts, improve confidence, and achieve their academic goals."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://phymacstutoring.com/" />
      <meta
        property="og:title"
        content=" Online Tutoring Services for Students | PhyMacs Tutoring "
      />
      <meta
        property="og:description"
        content="Get personalized tutoring with experienced tutors at PhyMacs. Explore online tutoring services designed to help students understand concepts, improve confidence, and achieve their academic goals. "
      />
      <meta property="og:site_name" content="PhyMacs Tutoring" />
      <meta property="og:image" content="https://www.phymacstutoring.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="canonical" href="https://www.phymacstutoring.com" />
    </Helmet>

    <Header />
    <Section bg="soft">
      <About showHeading />
    </Section>
    <Section bg="white">
      <Subjects />
    </Section>
    <Section bg="soft">
      <TeachingMode showHeading />
    </Section>
    <Section bg="white">
      <WhoweTeach />
    </Section>
    <Section bg="soft">
      <WhyChoosePhyMacs />
    </Section>
    <Section bg="white">
      <Testimonials />
    </Section>
    <Section bg="soft">
      <NewsInsights />
    </Section>
    <Section bg="white">
      <FAQ />
    </Section>
  </>
);

export default Home;
