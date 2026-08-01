import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import ContactSection from "../components/ContactSection";

/** /contact — enquiry form, socials and map. */
const Contact = () => (
  <>
    <PageHero title="Contact" accent="Us" sub="Online we teach the world — in person we cover the UK." />
    <Section bg="soft">
      <ContactSection />
    </Section>
  </>
);

export default Contact;
