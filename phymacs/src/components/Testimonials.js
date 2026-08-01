import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading from "./common/Heading";
import Stars from "./common/Stars";
import { useIsMobile, useIsTablet } from "../hooks/useBreakpoint";
import { TESTIMONIALS } from "../constants/constants";
import { setTestimonialIndex } from "../features/ui/uiSlice";
import "../styles/Testimonials.css";

/** Auto-advancing testimonial carousel, index shared via Redux ui state. */
const Testimonials = () => {
  const dispatch = useDispatch();
  const i = useSelector((s) => s.ui.testimonialIndex);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const per = isMobile || isTablet ? 1 : 2;
  const [paused, setPaused] = useState(false);
  const max = Math.max(0, TESTIMONIALS.length - per);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      dispatch(setTestimonialIndex(i >= max ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [paused, max, i, dispatch]);

  useEffect(() => {
    if (i > max) dispatch(setTestimonialIndex(0));
  }, [max, i, dispatch]);

  return (
    <div className="pm-testimonials">
      <Heading lead="What Parents &" accent="Students Say" sub="Real reviews from the PhyMacs community." />

      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="pm-testimonials__viewport">
          <div className="pm-testimonials__track" style={{ transform: `translateX(-${i * (100 / per)}%)` }}>
            {TESTIMONIALS.map((tm, k) => (
              <div className="pm-testimonials__slide" style={{ flexBasis: `${100 / per}%` }} key={k}>
                <div className="pm-testimonials__card">
                  <Stars n={tm.rating} />
                  <p className="pm-testimonials__quote">"{tm.quote}"</p>
                  <div className="pm-testimonials__highlight">{tm.highlight}</div>
                  <div className="pm-testimonials__author">
                    <div className="pm-testimonials__avatar">
                      {tm.name === "Anonymous" ? "★" : tm.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="pm-testimonials__name">{tm.name}</div>
                      <div className="pm-testimonials__subjects">{tm.subjects}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pm-testimonials__dots">
          {Array.from({ length: max + 1 }).map((_, k) => (
            <button
              key={k}
              aria-label={`Slide ${k + 1}`}
              onClick={() => dispatch(setTestimonialIndex(k))}
              className={`pm-testimonials__dot${k === i ? " pm-testimonials__dot--active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
