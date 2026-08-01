import { Link } from "react-router-dom";
import "../../styles/common/Button.css";

/**
 * Themed button. Renders a react-router <Link> when `to` is given,
 * otherwise a native <button>. variant: primary | outline | ghost | navy
 */
const Button = ({ children, to, onClick, variant = "primary", full = false, className = "", ...rest }) => {
  const classes = `btn pm-btn pm-btn--${variant}${full ? " w-100" : ""} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
