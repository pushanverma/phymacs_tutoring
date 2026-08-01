import { TICKER_ITEMS } from "../../constants/constants";
import "../../styles/common/Ticker.css";

/** Auto-scrolling announcement strip shown above the navbar. */
const Ticker = () => (
  <div className="pm-ticker">
    <div className="pm-ticker__track">
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
        <span className="pm-ticker__item" key={i}>
          <span className="pm-ticker__dot" />
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default Ticker;
