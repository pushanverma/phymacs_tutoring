import "../../styles/common/Section.css";

/** Full-width band with a themed background and a centred, max-width container. */
const Section = ({ children, bg = "white", className = "", id }) => (
  <section id={id} className={`pm-section pm-section--${bg} ${className}`.trim()}>
    <div className="container pm-section__inner">{children}</div>
  </section>
);

export default Section;
