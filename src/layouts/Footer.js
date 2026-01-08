import Link from "next/link";
import useForm from "../../hooks/useForm";
import dayjs from "dayjs";
import { businessData } from "../data/business";

const Footer = ({ footer }) => {
  switch (footer) {
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const SubscribeForm = () => {
  const { formData, handleChange, subscribe, loading, message, error } =
    useForm();
  return (
    <div className="newsletter-form">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await subscribe();
        }}
      >
        <div className="row">
          <div className="col-lg-5">
            <div className="form_group">
              <input
                type="email"
                className="form_control"
                placeholder="Correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form_group">
              <input
                type="text"
                className="form_control"
                placeholder="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form_group">
              <button className="main-btn bordered-btn" disabled={loading}>
                {loading ? "Enviando..." : "Suscribirme"}
              </button>
            </div>
          </div>
        </div>
        {message && <div className="mt-3 text-success">{message}</div>}
        {error && <div className="mt-3 text-danger">{error}</div>}
      </form>
    </div>
  );
};

const DefaultFooter = () => (
  <footer className="footer-default footer-white dark-black-bg">
    <div className="container">
      <div className="footer-top wow fadeInUp">
        <div className="row">
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex justify-content-center">
              <div className="site-logo text-center">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-1.png"
                      alt="Footer Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>Ubicacion</h5>
                <h6>Calle, Barrancabermeja</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>Email</h5>
                <h6>
                  <a href="mailto:hotlineinfo@gmial.com">
                    asoporkmag@gmial.com
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-widget pt-70 pb-25">
        <FooterMenu />
      </div>
      <div className="footer-newsletter footer-newsletter-one text-white wow fadeInUp">
        <div className="row">
          <div className="col-xl-3">
            <div className="footer-text">
              <h5>Suscríbete para recibir actualizaciones profesionales</h5>
            </div>
          </div>
          <div className="col-xl-9">
            <SubscribeForm />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2025 ASOPORKMAG. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Footer3 = () => (
  <footer
    className="footer-bg bg_cover p-r z-1 footer-white"
    style={{ backgroundImage: "url(assets/images/bg/footer-bg-1.jpg)" }}
  >
    <div className="container">
      <div className="footer-newsletter footer-newsletter-two yellow-bg">
        <div className="row">
          <div className="col-xl-3">
            <div className="footer-text">
              <h5>Suscríbete para recibir actualizaciones profesionales</h5>
            </div>
          </div>
          <div className="col-xl-9">
            <SubscribeForm />
          </div>
        </div>
      </div>
      <div className="footer-widget pb-25">
        <FooterMenu />
      </div>
      <div className="footer-copyright border-top-white-1">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2022 Orgrarium. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Footer4 = () => {
  return (
    <footer className="footer-default footer-white dark-black-bg">
      <div className="container">
        <div className="footer-newsletter footer-newsletter-two yellow-bg">
          <div className="row">
            <div className="col-xl-3">
              <div className="footer-text">
                <h5>Suscribete a Noticias Importantes</h5>
              </div>
            </div>
            <div className="col-xl-9">
              <SubscribeForm />
            </div>
          </div>
        </div>
        <div className="footer-widget pb-25">
          <FooterMenu />
        </div>
        <div className="footer-copyright border-top-white-1">
          <div className="col-lg-12">
            <div className="copyright-text text-center">
              <p>
                © {dayjs().format("YYYY")} {businessData.businessName} Todos los
                Derechos Reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const FooterMenu = () => (
  <div className="row">
    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
      <div className="footer-widget about-widget mb-40 wow fadeInDown">
        <h4 className="widget-title">Nosotros</h4>
        <div className="footer-about-content">
          <p>
            Asociación Campesina de Porcicultores y Criadores de Especies
            Menores del Magdalena Medio
          </p>
          <p>
            Portafolio institucional, participación gremial y proyecto
            estratégico de fortalecimiento técnico y productivo
          </p>
          <p>
            16 años fortaleciendo la porcicultura y las especies menores en el
            Magdalena Medio, promoviendo el respeto por el medio ambiente a lo
            largo de la cadena productiva.
          </p>
          <div className="social-box">
            <h4 className="mb-15">Siguenos</h4>
            <ul className="social-link">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-lg-4 col-md-7 col-sm-12">
      <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
        <h4 className="widget-title">Portafolio</h4>
        <div className="footer-widget-nav">
          <ul>
            <li>
              <a href="#">Nuestro portafolio</a>
            </li>
          </ul>
          <ul></ul>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12">
      <div className="footer-widget recent-post-widget mb-40 wow fadeInDown">
        <h4 className="widget-title">Noticias recientes</h4>
        {/* <ul className="post-widget-wrap">
          <li className="post-item">
            <img src="assets/images/widget/news-1.jpg" alt="Post Image" />
            <div className="post-title-date">
              <h3 className="title">
                <Link legacyBehavior href="/blog-details">
                  <a>Designing Better Links Websites &amp; Emails</a>
                </Link>
              </h3>
              <span className="posted-on">
                <i className="fas fa-calendar-alt" />
                <a href="#">25 March 2022</a>
              </span>
            </div>
          </li>
          <li className="post-item">
            <img src="assets/images/widget/news-2.jpg" alt="Post Image" />
            <div className="post-title-date">
              <h3 className="title">
                <Link legacyBehavior href="/blog-details">
                                  <input
                                    type="email"
                                    className="form_control"
                                    placeholder="Email Address"
                                    name="email"
                                    required=""
                                  />
            </div>
          </li>
        </ul> */}
        <Link legacyBehavior href="/blog-standard">
          <a className="more-btn">Ver mas noticias</a>
        </Link>
      </div>
    </div>
  </div>
);
