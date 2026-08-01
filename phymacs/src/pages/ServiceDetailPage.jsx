import { useParams, Navigate } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import ServiceDetail from "../components/ServiceDetail";
import { SERVICES } from "../constants/constants";

/** /services/:serviceKey — full breakdown of a single service format. */
const ServiceDetailPage = () => {
  const { serviceKey } = useParams();
  const service = SERVICES[serviceKey];

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero title={service.title} sub={service.intro} />
      <Section bg="soft">
        <ServiceDetail service={service} />
      </Section>
    </>
  );
};

export default ServiceDetailPage;
