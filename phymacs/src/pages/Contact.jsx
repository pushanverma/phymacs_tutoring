import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet-async";

/** /contact — enquiry form, socials and map. */
const Contact = () => (
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
        content="https://phymacstutoring.com/contact"
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
      <meta property="og:image" content="https://www.phymacstutoring.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="canonical" href="https://www.phymacstutoring.com" />
    </Helmet>

    <PageHero
      title="Contact"
      accent="Us"
      sub="Online we teach the world — in person we cover the UK."
    />
    <Section bg="soft">
      <ContactSection />
    </Section>
  </>
);

export default Contact;
