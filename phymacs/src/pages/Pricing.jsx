import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import PricingSection from "../components/PricingSection";
import { Helmet } from "react-helmet-async";

/** /pricing — the three subscription tiers. */
const Pricing = () => (
  <>
    <Helmet>
      <title>Tutoring Prices & Plans | PhyMacs Tutoring</title>
      <meta
        name="description"
        content="Explore PhyMacs Tutoring prices and plans. Find flexible tutoring options designed to provide students with personalized academic support and expert guidance."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://phymacstutoring.com/pricing"
      />
      <meta
        property="og:title"
        content=" Tutoring Prices & Plans | PhyMacs Tutoring "
      />
      <meta
        property="og:description"
        content="Explore PhyMacs Tutoring prices and plans. Find flexible tutoring options designed to provide students with personalized academic support and expert guidance."
      />
      <meta property="og:site_name" content="PhyMacs Tutoring" />
      <meta property="og:image" content="https://www.phymacstutoring.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="canonical" href="https://www.phymacstutoring.com" />
    </Helmet>
    <PageHero
      title="Simple,"
      accent="Transparent Pricing"
      sub="Plans in GBP (£). No hidden fees — cancel anytime."
    />
    <Section bg="soft">
      <PricingSection />
    </Section>
  </>
);

export default Pricing;
