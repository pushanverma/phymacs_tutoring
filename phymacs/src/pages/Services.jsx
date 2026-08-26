import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Banner from "../components/common/Banner";
import TeachingMode from "../components/TeachingMode";
import { Helmet } from "react-helmet-async";
import ogimage from "../assets/images/phymacs_OG_Image.jpg";

/** /services — overview of both service formats with a CTA to book. */
const Services = () => (
  <>
    <Helmet>
      <title>Contact PhyMacs Tutoring | Get in Touch </title>
      <meta
        name="description"
        content="Have questions about tutoring or our services? Contact PhyMacs Tutoring to learn more about our programs, tutors, pricing, and how we can help you find the right learning support."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://phymacstutoring.com/services"
      />
      <meta
        property="og:title"
        content=" Contact PhyMacs Tutoring | Get in Touch "
      />
      <meta
        property="og:description"
        content="Have questions about tutoring or our services? Contact PhyMacs Tutoring to learn more about our programs, tutors, pricing, and how we can help you find the right learning support."
      />
      <meta property="og:site_name" content="PhyMacs Tutoring" />
      <meta property="og:image" content={ogimage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="canonical" href="https://www.phymacstutoring.com" />
    </Helmet>
    <PageHero
      title="Our"
      accent="Services"
      sub="Flexible, high-quality tuition designed around every student's needs."
    />
    <Section bg="soft">
      <TeachingMode />
      <div className="mt-5">
        <Banner
          title="Not sure which suits your child?"
          body="Book a free consultation and we'll recommend the right format and plan."
          label="Book a Free Consultation"
          to="/contact"
        />
      </div>
    </Section>
  </>
);

export default Services;
