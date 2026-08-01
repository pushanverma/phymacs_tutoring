import Icon from "./Icon";
import "../../styles/common/Chip.css";

/** Rounded-square icon badge used throughout the site. */
const Chip = ({ icon, color, size = 44, soft = false }) => (
  <div
    className={`pm-chip${soft ? " pm-chip--soft" : ""}`}
    style={{
      width: size,
      height: size,
      borderRadius: size * 0.28,
      background: soft ? `${color}1A` : color,
      color: soft ? color : "var(--pm-white)",
    }}
  >
    <Icon name={icon} size={size * 0.5} />
  </div>
);

export default Chip;
