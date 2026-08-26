import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { Helmet } from "react-helmet-async";
import ogimage from "../assets/images/phymacs_OG_Image.jpg";

/** Catch-all route for unmatched URLs. */
const NotFound = () => (
  <>
    <Helmet>
      <title>Page Not Found | PhyMacs Tutoring </title>
      <meta
        name="description"
        content="The page you're looking for could not be found. Return to PhyMacs Tutoring's homepage or explore our tutoring services to find what you need."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://phymacstutoring.com/"
      />
      <meta
        property="og:title"
        content=" Page Not Found | PhyMacs Tutoring "
      />
      <meta
        property="og:description"
        content="The page you're looking for could not be found. Return to PhyMacs Tutoring's homepage or explore our tutoring services to find what you need."
      />
      <meta property="og:site_name" content="PhyMacs Tutoring" />
      <meta property="og:image" content={ogimage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="canonical" href="https://www.phymacstutoring.com" />
    </Helmet>
    <PageHero
      title="404 —"
      accent="Page Not Found"
      sub="The page you're looking for doesn't exist or has moved."
    />
    <Section bg="soft" className="text-center">
      <Button variant="primary" to="/">
        Back to Home
      </Button>
    </Section>
  </>
);

export default NotFound;
