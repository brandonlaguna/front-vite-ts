import Link from "next/link";
import businessInfo from "../../store/businessInfo";
import LoginForm from "../components/LoginForm";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearAuth } from "../../store/authSlice";

const OffcanvasPanel = ({ overlyPanel, togglePanel }) => {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(clearAuth());
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refreshToken");
    window.location.reload();
  };

  return (
    <div className={`offcanvas-panel ${overlyPanel ? "panel-on" : ""}`}>
      <div className="panel-overlay" onClick={() => togglePanel()} />
      <div className="offcanvas-panel-inner">
        <div className="panel-logo">
          <Link legacyBehavior href="/">
            <a>
              <img src="assets/images/logo/logo-1.png" alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="about-us">
          <h5 className="panel-widget-title">Acerca de nosotros</h5>
          <p>{businessInfo.about}</p>
        </div>
        <div className="contact-us">
          <h5 className="panel-widget-title">Contactenos</h5>
          <ul>
            <li>
              <i className="fal fa-map-marker-alt" />
              {businessInfo.address}
            </li>
            <li>
              <i className="fal fa-envelope-open" />
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </li>
            <li>
              <i className="fal fa-phone" />
              <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
            </li>
          </ul>
        </div>
        <div className="contact" style={{ marginTop: 10 }}>
          <h5 className="panel-widget-title">Login</h5>
          {isAuthenticated ? (
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="team-member_two text-center mb-40 wow fadeInUp">
                  <div className="member-img">
                    <img
                      src="assets/images/team/img-1.jpg"
                      alt="Member Image"
                    />
                    <div className="hover-overlay" />
                    <ul className="social-link">
                      <li>
                        <a href="#" onClick={handleLogout}>
                          <i className="fa-solid fa-arrow-right-from-bracket" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="member-info">
                    <h3 className="title">
                      <Link legacyBehavior href="/farmers">
                        <a>{user.name}</a>
                      </Link>
                    </h3>
                    <p className="position">{user.ROLE}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
        <a
          href="#"
          className="panel-close"
          onClick={(e) => {
            e.preventDefault();
            togglePanel();
          }}
        >
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default OffcanvasPanel;
