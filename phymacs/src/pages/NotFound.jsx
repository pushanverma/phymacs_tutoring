import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Button from "../components/common/Button";

/** Catch-all route for unmatched URLs. */
const NotFound = () => (
  <>
    <PageHero title="404 —" accent="Page Not Found" sub="The page you're looking for doesn't exist or has moved." />
    <Section bg="soft" className="text-center">
      <Button variant="primary" to="/">
        Back to Home
      </Button>
    </Section>
  </>
);

export default NotFound;
