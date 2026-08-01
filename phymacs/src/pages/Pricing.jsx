import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import PricingSection from "../components/PricingSection";

/** /pricing — the three subscription tiers. */
const Pricing = () => (
  <>
    <PageHero title="Simple," accent="Transparent Pricing" sub="Plans in GBP (£). No hidden fees — cancel anytime." />
    <Section bg="soft">
      <PricingSection />
    </Section>
  </>
);

export default Pricing;
