import Icon from "./common/Icon";
import Chip from "./common/Chip";
import Heading from "./common/Heading";
import { SUBJECT_ROWS } from "../constants/constants";
import "../styles/Subjects.css";

/** One alternating text/illustration row for a single subject. Private to Subjects. */
const ZigZagRow = ({ item, flip }) => {
  const text = (
    <div className="col-12 col-lg-6">
      <div className="pm-zigzag__head">
        <Chip icon={item.icon} color={item.accent} size={40} soft />
        <div>
          <h3 className="pm-zigzag__title">{item.title}</h3>
          <div className="pm-zigzag__sub">{item.sub}</div>
        </div>
      </div>
      <p className="pm-zigzag__body">{item.body}</p>
      <ul className="pm-zigzag__points">
        {item.points.map((pt) => (
          <li key={pt}>
            <span className="pm-zigzag__dot" style={{ background: item.accent }} />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );

  const card = (
    <div className="col-12 col-lg-6">
      <div className="pm-zigzag__card" style={{ background: `${item.accent}0D`, borderColor: `${item.accent}26` }}>
        <div className="pm-zigzag__card-icon" style={{ color: item.accent }}>
          <Icon name={item.icon} size={56} />
        </div>
        <div className="pm-zigzag__card-title">{item.cardTitle}</div>
        <div className="pm-zigzag__card-sub">{item.cardSub}</div>
      </div>
    </div>
  );

  return <div className={`row pm-zigzag${flip ? " pm-zigzag--flip" : ""}`}>{flip ? <>{card}{text}</> : <>{text}{card}</>}</div>;
};

/** Alternating zig-zag rows introducing each subject taught. */
const Subjects = () => (
  <div className="pm-subjects">
    <Heading
      lead="A Complete Spectrum of Science &"
      accent="Maths Tuition"
      sub="From foundations to degree level, our teaching is designed to help students understand, apply and excel."
    />
    {SUBJECT_ROWS.map((r, i) => (
      <ZigZagRow key={r.title} item={r} flip={i % 2 === 1} />
    ))}
  </div>
);

export default Subjects;
