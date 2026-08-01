import { useDispatch, useSelector } from "react-redux";
import Heading from "./common/Heading";
import Icon from "./common/Icon";
import { useIsMobile, useIsTablet } from "../hooks/useBreakpoint";
import { NEWS_ITEMS } from "../constants/constants";
import { setNewsIndex } from "../features/ui/uiSlice";
import "../styles/NewsInsights.css";

/** Study-tips / exam-board news carousel with manual arrow controls. */
const NewsInsights = () => {
  const dispatch = useDispatch();
  const i = useSelector((s) => s.ui.newsIndex);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const per = isMobile ? 1 : isTablet ? 2 : 3;
  const max = Math.max(0, NEWS_ITEMS.length - per);

  const prev = () => dispatch(setNewsIndex(i <= 0 ? max : i - 1));
  const next = () => dispatch(setNewsIndex(i >= max ? 0 : i + 1));

  return (
    <div className="pm-news">
      <Heading lead="Learning" accent="Insights" sub="Study guidance, exam-board explainers and advice for parents." />

      <div className="pm-news__controls">
        <button aria-label="Previous" onClick={prev} className="pm-news__arrow">
          <Icon name="arrowL" size={17} />
        </button>
        <button aria-label="Next" onClick={next} className="pm-news__arrow">
          <Icon name="arrowR" size={17} />
        </button>
      </div>

      <div className="pm-news__viewport">
        <div className="pm-news__track" style={{ transform: `translateX(-${i * (100 / per)}%)` }}>
          {NEWS_ITEMS.map((n, k) => (
            <div className="pm-news__slide" style={{ flexBasis: `${100 / per}%` }} key={k}>
              <article className="pm-news__card">
                <div className="pm-news__thumb" style={{ background: `linear-gradient(135deg, ${n.accent}22, ${n.accent}0A)`, color: n.accent }}>
                  <Icon name="book" size={40} />
                </div>
                <div className="pm-news__body">
                  <span className="pm-news__tag" style={{ color: n.accent }}>
                    {n.tag}
                  </span>
                  <h3 className="pm-news__title">{n.title}</h3>
                  <p className="pm-news__excerpt">{n.excerpt}</p>
                  <span className="pm-news__link">
                    Read Full Story <Icon name="arrowR" size={13} />
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;
