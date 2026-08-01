import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Banner from "../components/common/Banner";
import TeachingMode from "../components/TeachingMode";

/** /services — overview of both service formats with a CTA to book. */
const Services = () => (
  <>
    <PageHero title="Our" accent="Services" sub="Flexible, high-quality tuition designed around every student's needs." />
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
