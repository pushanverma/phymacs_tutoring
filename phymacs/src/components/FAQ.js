import { useState } from "react";
import Heading from "./common/Heading";
import { FAQS } from "../constants/constants";
import "../styles/FAQ.css";

/** Expand/collapse accordion of frequently asked questions. */
const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="pm-faq">
      <Heading lead="Frequently Asked" accent="Questions" sub="Everything you need to know before getting started." />
      <div className="pm-faq__list">
        {FAQS.map((f, i) => {
          const active = open === i;
          return (
            <div key={f.q} className={`pm-faq__item${active ? " pm-faq__item--active" : ""}`}>
              <button
                className="pm-faq__question"
                aria-expanded={active}
                onClick={() => setOpen(active ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="pm-faq__toggle">{active ? "−" : "+"}</span>
              </button>
              {active && <div className="pm-faq__answer">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
