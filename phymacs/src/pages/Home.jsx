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

/** Landing page: composes every marketing section in order. */
const Home = () => (
  <>
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
