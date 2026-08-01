import "../../styles/common/PageHero.css";

/** Navy gradient banner used at the top of every inner (non-Home) page. */
const PageHero = ({ title, accent, sub }) => (
  <div className="pm-page-hero">
    <div className="pm-page-hero__glow" />
    <div className="container pm-page-hero__inner">
      <h1 className="pm-page-hero__title">
        {title} {accent && <span className="pm-page-hero__accent">{accent}</span>}
      </h1>
      {sub && <p className="pm-page-hero__sub">{sub}</p>}
      <div className="pm-page-hero__rule" />
    </div>
  </div>
);

export default PageHero;
