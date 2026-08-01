import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Ticker from "./Ticker";
import Logo from "./Logo";
import Chip from "./Chip";
import Button from "./Button";
import { NAV_LINKS, SERVICES } from "../../constants/constants";
import { toggleMobileMenu, closeMobileMenu, setServicesDropdownOpen } from "../../features/ui/uiSlice";
import "../../styles/common/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { mobileMenuOpen, servicesDropdownOpen } = useSelector((s) => s.ui);
  const location = useLocation();
  const onServicesRoute = location.pathname.startsWith("/services");

  return (
    <header className="pm-navbar">
      <Ticker />
      <div className="pm-navbar__bar">
        <div className="container pm-navbar__inner">
          <NavLink to="/" className="pm-navbar__brand" onClick={() => dispatch(closeMobileMenu())}>
            <Logo light />
          </NavLink>

          <nav className="pm-navbar__links d-none d-lg-flex">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div
                  key={item.key}
                  className="pm-navbar__dropdown"
                  onMouseEnter={() => dispatch(setServicesDropdownOpen(true))}
                  onMouseLeave={() => dispatch(setServicesDropdownOpen(false))}
                >
                  <NavLink to={item.to} className={`pm-navbar__link${onServicesRoute ? " pm-navbar__link--active" : ""}`}>
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </NavLink>
                  {servicesDropdownOpen && (
                    <div className="pm-navbar__menu">
                      {item.children.map((child) => {
                        const service = SERVICES[child.key === "service-online" ? "online" : "home"];
                        return (
                          <NavLink key={child.key} to={child.to} className="pm-navbar__menu-item">
                            <Chip icon={service.icon} color={service.accent} size={28} soft />
                            {child.label}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.key}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `pm-navbar__link${isActive ? " pm-navbar__link--active" : ""}`}
                >
                  {item.label}
                </NavLink>
              )
            )}
            <Button to="/contact" variant="primary" className="pm-navbar__cta">
              Let's Talk
            </Button>
          </nav>

          <button
            className="pm-navbar__toggle d-lg-none"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => dispatch(toggleMobileMenu())}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="pm-navbar__mobile d-lg-none">
          <div className="container">
            {NAV_LINKS.map((item) => (
              <div key={item.key}>
                {item.children ? (
                  <>
                    <div className="pm-navbar__mobile-heading">{item.label}</div>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.key}
                        to={child.to}
                        className="pm-navbar__mobile-link"
                        onClick={() => dispatch(closeMobileMenu())}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) => `pm-navbar__mobile-link pm-navbar__mobile-link--top${isActive ? " pm-navbar__mobile-link--active" : ""}`}
                    onClick={() => dispatch(closeMobileMenu())}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <div className="pm-navbar__mobile-cta">
              <Button full variant="primary" to="/contact" onClick={() => dispatch(closeMobileMenu())}>
                Let's Talk
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
