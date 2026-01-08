import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";
import OrgariumAcc from "../src/components/OrgariumAcc";
import Hero4Slider from "../src/components/sliders/Hero4Slider";
import Layout from "../src/layouts/Layout";
import {
  logoSlider,
  projectsSliderThree,
  recentProductSlider,
  testimonialSliderFive,
} from "../src/sliderProps";
import { ExampleService } from "../src/services";
import FormService from "../src/services/formService";
import dayjs from "dayjs";
import UsersService from "../src/services/usersService";
import ProductsService from "../src/services/productsService";
const Index = () => {
  const [active, setActive] = useState("collapse0");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const [posts, setPosts] = useState([]);
  const [usersMembers, setUsersMembers] = useState([]);
  const [products, setProducts] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormMessage("");

    try {
      const response = await FormService.getInTouch(formData);
      if (response && response.success) {
        setFormMessage(
          "¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto."
        );
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormMessage(""), 5000);
      } else {
        setFormMessage(
          "Error al enviar el mensaje. Por favor intenta de nuevo."
        );
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setFormMessage("Error al enviar el mensaje. Por favor intenta de nuevo.");
    } finally {
      setFormLoading(false);
    }
  };

  useEffect(() => {
    ExampleService.getPosts({ limit: 6 })
      .then((data) => {
        setPosts(data.response);
      })
      .catch((err) => console.error(err));

    UsersService.getUsersByType({ typeUser: "MEMBER", limit: 4 })
      .then((data) => {
        if (data && data.response && data.response.length > 0) {
          setUsersMembers(data.response);
        }
      })
      .catch((err) => console.error(err));

    ProductsService.getAll({ limit: 6 })
      .then((data) => {
        if (data && data.response && data.response.length > 0) {
          setProducts(data.response);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout header={4} footer={4}>
      <Hero4Slider />
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section-two p-r z-1">
        <div className="container">
          <div className="about-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="about-five_image-box mb-40 wow fadeInLeft">
                  <img src="assets/images/about/img-3.jpg" alt="About Image" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-content-box content-box-gap pl-lg-60 pr-lg-70 mb-40 wow fadeInRight">
                  <div className="section-title section-title-left mb-35">
                    <span className="sub-title">Quiénes Somos</span>
                    <h2>
                      Fortalecemos la Porcicultura y Especies Menores en el
                      Magdalena Medio
                    </h2>
                  </div>
                  <p>
                    ASOPORKMAG es una asociación campesina con 16 años de
                    trayectoria que integra a porcicultores y criadores de
                    especies menores del Distrito de Barrancabermeja y la Región
                    del Magdalena Medio. Trabajamos bajo los principios de
                    asociatividad y economía popular y comunitaria,
                    fortaleciendo la productividad y sostenibilidad de las
                    unidades productivas de nuestros afiliados.
                  </p>
                  <p style={{ marginTop: "15px" }}>
                    Nuestro compromiso es articular oportunidades de negocio,
                    representar los intereses gremiales de nuestros asociados y
                    promover sistemas productivos sostenibles, rentables y
                    competitivos, con respeto por el medio ambiente.
                  </p>
                  {/* <div className="avatar-box d-flex align-items-center">
                    <div className="thumb mr-20">
                      <img src="assets/images/user-1.jpg" alt="Admin Thumb" />
                    </div>
                    <div className="content">
                      <img src="assets/images/sign-1.png" alt="Sign" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Category Section ======*/}
      <section className="category-section pt-90">
        <div className="container">
          <div className="category-wrapper">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="section-title text-center mb-50 wow fadeInDown">
                  <span className="sub-title">Nuestra Oferta</span>
                  <h2>Especies Menores de Calidad</h2>
                  <p style={{ marginTop: "15px", fontSize: "14px" }}>
                    Producción de porcinos, aves, ovinos y caprinos de alta
                    calidad, generando ingresos sostenibles para nuestros
                    productores
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-15.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Patos</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <img src="assets/images/icon/icon-14.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Pollo</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-16.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Ovejas</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <img src="assets/images/icon/icon-17.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Cabras</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-19.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Cerdo</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <img src="assets/images/icon/icon-20.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Gallinas</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Category Section ======*/}
      {/*====== Start Intro Section ======*/}
      <section
        className="intro-video-two bg_cover"
        style={{ backgroundImage: "url(assets/images/bg/intro-bg-3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="play-content-box text-center">
                <a
                  href="https://www.youtube.com/watch?v=gOZ26jO6iXE"
                  className="video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Intro Section ======*/}
      {/*====== Start Benefits Section ======*/}
      <section className="benefits-section pt-130 pb-100 p-r z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-70 wow fadeInDown">
                <span className="sub-title">Beneficios</span>
                <h2>¿Por Qué Unirse a ASOPORKMAG?</h2>
                <p style={{ marginTop: "15px", fontSize: "14px" }}>
                  Acceso a oportunidades, formación y apoyo técnico para crecer
                  como productor
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-50 wow fadeInUp">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-graduation-cap"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <h3 className="title">Capacitación y Formación</h3>
                <p>
                  Acceso a talleres, jornadas presenciales y virtuales en buenas
                  prácticas pecuarias, manejo sanitario y modelos de negocio.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-50 wow fadeInDown">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-tools"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <h3 className="title">Acompañamiento Técnico</h3>
                <p>
                  Asistencia en finca de profesionales, diagnósticos productivos
                  y planes de mejora personalizados para tu unidad productiva.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-50 wow fadeInUp">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-chart-line"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <h3 className="title">Gestión de Proyectos</h3>
                <p>
                  Apoyo en formulación de proyectos, acceso a recursos de
                  cofinanciación y representación gremial ante instituciones.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-50 wow fadeInDown">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-handshake"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <h3 className="title">Encadenamientos Comerciales</h3>
                <p>
                  Articulación con compradores, aliados estratégicos y acceso a
                  mercados de mayor valor con mejores condiciones de venta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Benefits Section ======*/}
      {/*====== Start Value for Associates Section ======*/}
      <section className="value-section dark-black-bg pt-130 pb-100 p-r z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title section-title-white text-center mb-70 wow fadeInDown">
                <span className="sub-title">Valor Estratégico</span>
                <h2>Lo que ASOPORKMAG Ofrece a sus Asociados</h2>
                <p
                  style={{ marginTop: "15px", fontSize: "14px", color: "#ccc" }}
                >
                  Somos tu aliado en cada etapa del crecimiento productivo y
                  comercial
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <i
                    className="fas fa-book"
                    style={{ fontSize: "32px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <a href="#" style={{ color: "#fff" }}>
                      Capacitación Integral
                    </a>
                  </h3>
                  <p>
                    Formación en buenas prácticas de producción, gestión
                    empresarial y manejo sanitario especializado.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-service-item mb-50 wow fadeInDown">
                <div className="icon">
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ fontSize: "32px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <a href="#" style={{ color: "#fff" }}>
                      Asistencia Técnica en Finca
                    </a>
                  </h3>
                  <p>
                    Visitas de profesionales, diagnósticos productivos y planes
                    de mejora personalizados en tu predio.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <i
                    className="fas fa-project-diagram"
                    style={{ fontSize: "32px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <a href="#" style={{ color: "#fff" }}>
                      Gestión de Proyectos
                    </a>
                  </h3>
                  <p>
                    Apoyo en formulación, acceso a recursos de cofinanciación y
                    representación gremial institucional.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="single-service-item mb-50 wow fadeInDown">
                <div className="icon">
                  <i
                    className="fas fa-store"
                    style={{ fontSize: "32px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <a href="#" style={{ color: "#fff" }}>
                      Encadenamientos Comerciales
                    </a>
                  </h3>
                  <p>
                    Articulación con compradores, acceso a mercados formales y
                    mejores condiciones de negociación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Value for Associates Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-130">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-60 wow fadeInLeft">
                <span className="sub-title">Nuestro Talento</span>
                <h2>Productores Asociados</h2>
                <p style={{ marginTop: "15px", fontSize: "14px" }}>
                  Conoce a los productores comprometidos con la calidad y
                  sostenibilidad en el Magdalena Medio
                </p>
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-4">
              <div className="team-button float-lg-right mb-60 wow fadeInRight">
                <Link legacyBehavior href="/farmers">
                  <a className="main-btn bordered-btn bordered-yellow">
                    Become a Member
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="row justify-content-center">
            {usersMembers.length > 0 ? (
              usersMembers.map((member, index) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                  key={index}
                >
                  <div className="team-member_two text-center mb-40 wow fadeInUp">
                    <div className="member-img">
                      <img
                        src="assets/images/team/img-1.jpg"
                        alt="Member Image"
                      />
                      <div className="hover-overlay" />
                      <ul className="social-link">
                        {member.facebookId && (
                          <li>
                            <a
                              href={`https://www.facebook.com/${member.facebookId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                        )}
                        {member.twitterId && (
                          <li>
                            <a
                              href={`https://www.twitter.com/${member.twitterId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        )}
                        {member.instagramId && (
                          <li>
                            <a
                              href={`https://www.instagram.com/${member.instagramId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        )}
                        {member.linkedinId && (
                          <li>
                            <a
                              href={`https://www.linkedin.com/in/${member.linkedinId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="member-info">
                      <h3 className="title">
                        <Link legacyBehavior href="/farmers">
                          <a>{member.name}</a>
                        </Link>
                      </h3>
                      <p className="position">Asociado</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>0 Asociados</p>
            )}
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Project Section ======*/}
      <section className="project-section pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-70 wow fadeInDown">
                <span className="sub-title">Proyectos Estratégicos</span>
                <h2>Portafolio de Proyectos ASOPORKMAG</h2>
                <p style={{ marginTop: "15px", fontSize: "14px" }}>
                  Iniciativas clave para fortalecer a nuestros productores y
                  comunidades rurales
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-50 wow fadeInUp">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-graduation-cap"
                    style={{ fontSize: "40px" }}
                  />
                </div>
                <h3 className="title">Fortalecimiento Técnico y Productivo</h3>
                <p>
                  Mejora de la productividad mediante formación, asistencia
                  técnica en finca, tecnificación básica e implementación de
                  registros productivos.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-50 wow fadeInDown">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-handshake"
                    style={{ fontSize: "40px" }}
                  />
                </div>
                <h3 className="title">Asociatividad y Economía Popular</h3>
                <p>
                  Fortalecimiento de la organización colectiva para beneficios
                  de compras y ventas conjuntas con gobernanza interna.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-50 wow fadeInUp">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-exchange-alt"
                    style={{ fontSize: "40px" }}
                  />
                </div>
                <h3 className="title">Encadenamientos Productivos</h3>
                <p>
                  Inclusión en cadenas locales, regionales y nacionales con
                  mejores condiciones comerciales y acuerdos de venta.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-50 wow fadeInDown">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-lightbulb"
                    style={{ fontSize: "40px" }}
                  />
                </div>
                <h3 className="title">Emprendimiento Rural</h3>
                <p>
                  Creación y consolidación de micronegocios agropecuarios con
                  formación en modelo de negocio y acceso a finanzas rurales.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-50 wow fadeInUp">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i className="fas fa-users" style={{ fontSize: "40px" }} />
                </div>
                <h3 className="title">Formación y Relevo Generacional</h3>
                <p>
                  Desarrollo del talento humano con énfasis en jóvenes y mujeres
                  rurales, fortalecimiento de liderazgos y alianzas educativas.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-50 wow fadeInDown">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i className="fas fa-leaf" style={{ fontSize: "40px" }} />
                </div>
                <h3 className="title">Sostenibilidad Ambiental</h3>
                <p>
                  Promoción de prácticas productivas sostenibles, bienestar
                  animal y eficiencia en uso de recursos naturales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-10">
            <div className="section-title text-center mb-60 wow fadeInDown">
              <span className="sub-title">Project Gallery</span>
              <h2>We’ve Done Many Other Projects Let’s See Gallery Insights</h2>
            </div>
          </div>
        </div>
        <Slider {...projectsSliderThree} className="projects-slider-three">
          <div className="project-item-four wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/portfolio/portfolio-1.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link legacyBehavior href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Cow Eating Gress From Farms</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item-four wow fadeInDown">
            <div className="img-holder">
              <img src="assets/images/portfolio/portfolio-2.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link legacyBehavior href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Cow Eating Gress From Farms</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item-four wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/portfolio/portfolio-3.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link legacyBehavior href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Cow Eating Gress From Farms</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item-four wow fadeInDown">
            <div className="img-holder">
              <img src="assets/images/portfolio/portfolio-4.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link legacyBehavior href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Cow Eating Gress From Farms</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item-four wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/portfolio/portfolio-5.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link legacyBehavior href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Cow Eating Gress From Farms</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item-four wow fadeInDown">
            <div className="img-holder">
              <img src="assets/images/portfolio/portfolio-3.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link legacyBehavior href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Cow Eating Gress From Farms</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div> */}
      {/*====== End Project Section ======*/}
      {/*====== Start Products Section ======*/}
      <section className="products-area pt-130 pb-170 p-r z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-60 wow fadeInLeft">
                <span className="sub-title">Nuestros Productos</span>
                <h2>Algunos de nuestros productos de la tienda</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="product-button float-lg-right wow fadeInRight mb-60">
                <Link legacyBehavior href="/products">
                  <a className="main-btn bordered-btn bordered-yellow">
                    Ver mas productos
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <Slider {...recentProductSlider} className="recent-product-slider">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  className="single-product-item mb-40 wow fadeInDown"
                  key={index}
                >
                  <div className="product-img">
                    <img src={product?.image[0]} alt="" />
                    <div className="pc-btn">{product?.category || ""}</div>
                    <div className="cart-button">
                      <Link legacyBehavior href="/products">
                        <a className="main-btn btn-yellow">Ver producto</a>
                      </Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>{product.name}</a>
                      </Link>
                    </h3>
                    <span className="price">
                      <span className="curreny">$</span>
                      {product.price}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </Slider>
        </div>
      </section>
      {/*====== End Products Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-section">
        <div className="container-fluid">
          <div
            className="cta-wrap-two bg_cover pb-130"
            style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cta-content-box wow fadeInDown">
                    <span className="tag-line">Oportunidades</span>
                    <h2>Únete a Nuestra Red de Productores</h2>
                    <p>
                      Somos el aliado estratégico de los productores que quieren
                      crecer, formalizarse y competir en mercados de mayor
                      valor, incorporando responsabilidad ambiental y respeto
                      por el entorno.
                    </p>
                    <Link legacyBehavior href="/farmers">
                      <a className="main-btn bordered-btn">
                        Conoce Nuestras Oportunidades
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Faq Section ======*/}
      {/* <section className="faqs-section pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-one_img-box mb-50">
                <img
                  src="assets/images/faq/faq-1.jpg"
                  className="faq-img-one wow fadeInUp"
                  alt="Faq Image"
                />
                <img
                  src="assets/images/faq/faq-2.jpg"
                  className="faq-img-two wow fadeInDown"
                  alt="Faq Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-one_content-box mb-50 pl-lg-70 wow fadeInRight">
                <div className="section-title mb-60">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Why People’s Choose Farming Products</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="accordionOne"
                >
                  <OrgariumAcc
                    title={"Best Organic Food Provider Since 1995"}
                    event={"collapse0"}
                    onClick={() => setActive("collapse0")}
                    active={active}
                  />
                  <OrgariumAcc
                    title={" Why Choose Our Products ?"}
                    event={"collapse1"}
                    onClick={() => setActive("collapse1")}
                    active={active}
                  />
                  <OrgariumAcc
                    title={"Organic Food and Biology Safe ?"}
                    event={"collapse2"}
                    onClick={() => setActive("collapse2")}
                    active={active}
                  />
                  <OrgariumAcc
                    title={"How Much Sweet &amp; Testy Our Foods ?"}
                    event={"collapse3"}
                    onClick={() => setActive("collapse3")}
                    active={active}
                  />
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Faq Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-section dark-black-bg pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-four_content-box wow fadeInLeft mb-50">
                <div className="section-title section-title-white mb-60">
                  <span className="sub-title">Contacto</span>
                  <h2>¡Conecta con ASOPORKMAG!</h2>
                  <p style={{ marginTop: "15px", fontSize: "14px" }}>
                    Comparte tus dudas, intereses o propuestas de negocio con
                    nuestro equipo
                  </p>
                </div>
                <div className="contact-form">
                  <form onSubmit={handleFormSubmit} autoComplete="off">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Nombre Completo"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        disabled={formLoading}
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Dirección de Correo"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        disabled={formLoading}
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        className="form_control"
                        placeholder="Mensaje"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        disabled={formLoading}
                      />
                    </div>
                    {formMessage && (
                      <div
                        className="form_group"
                        style={{
                          padding: "12px",
                          borderRadius: "4px",
                          backgroundColor:
                            formMessage.includes("exitosamente") ||
                            formMessage.includes("Error")
                              ? formMessage.includes("exitosamente")
                                ? "#d4edda"
                                : "#f8d7da"
                              : "#d4edda",
                          color:
                            formMessage.includes("exitosamente") ||
                            formMessage.includes("Error")
                              ? formMessage.includes("exitosamente")
                                ? "#155724"
                                : "#721c24"
                              : "#155724",
                          border:
                            formMessage.includes("exitosamente") ||
                            formMessage.includes("Error")
                              ? formMessage.includes("exitosamente")
                                ? "1px solid #c3e6cb"
                                : "1px solid #f5c6cb"
                              : "1px solid #c3e6cb",
                          fontSize: "14px",
                        }}
                      >
                        {formMessage}
                      </div>
                    )}
                    <div className="form_group">
                      <button
                        type="submit"
                        className="main-btn btn-yellow"
                        disabled={formLoading}
                      >
                        {formLoading ? "Enviando..." : "Enviar mensaje"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="map-box_one ml-lg-70 wow fadeInRight">
                <div className="map-box mb-50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31676.55849591111!2d-73.87209457513963!3d7.059725498328798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e42eca8af70acad%3A0xcfa9ac026f4a1cd6!2sBarrancabermeja%2C%20Santander!5e0!3m2!1ses!2sco!4v1767832199366!5m2!1ses!2sco"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                  {/* <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/* <section className="testimonial-section pt-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Clients Feedback</span>
                <h2>What’s Our Client Say About Our Organic Foods</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="testimonial-img-box mb-40 wow fadeInLeft">
                    <img
                      src="assets/images/testimonial/img-12.jpg"
                      alt="testimonial image"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial-wrapper pl-lg-30 mb-40 wow fadeInRight">
                    <Slider
                      {...testimonialSliderFive}
                      className="testimonial-slider-five mb-55"
                    >
                      <div className="testimonial-item-four">
                        <div className="testimonial-content">
                          <div className="client-review-box d-flex">
                            <div className="client-thumb mb-10">
                              <img
                                src="assets/images/testimonial/company-1.png"
                                alt=""
                              />
                            </div>
                            <div className="review-box mb-10">
                              <span>Quality Foods</span>
                              <ul className="ratings">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <p>
                            Sed ut perspiciatis unde omnis iste natuses
                            voluptatem accusantium doloremque lauda ntium totam
                            rem aperiam eaque ipsa quaeab inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem voluptas sit aspernatur{" "}
                          </p>
                          <div className="author-title-qoute d-flex">
                            <div className="quote">
                              <i className="fas fa-quote-right" />
                            </div>
                            <div className="author-title">
                              <h4>Michael R. Jordan</h4>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item-four">
                        <div className="testimonial-content">
                          <div className="client-review-box d-flex justify-content-between">
                            <div className="client-thumb mb-10">
                              <img
                                src="assets/images/testimonial/company-1.png"
                                alt=""
                              />
                            </div>
                            <div className="review-box mb-10">
                              <span>Quality Foods</span>
                              <ul className="ratings">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <p>
                            Sed ut perspiciatis unde omnis iste natuses
                            voluptatem accusantium doloremque lauda ntium totam
                            rem aperiam eaque ipsa quaeab inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem voluptas sit aspernatur{" "}
                          </p>
                          <div className="author-title-qoute d-flex">
                            <div className="quote">
                              <i className="fas fa-quote-right" />
                            </div>
                            <div className="author-title">
                              <h4>Jordan Michael</h4>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item-four">
                        <div className="testimonial-content">
                          <div className="client-review-box d-flex">
                            <div className="client-thumb mb-10">
                              <img
                                src="assets/images/testimonial/company-1.png"
                                alt=""
                              />
                            </div>
                            <div className="review-box mb-10">
                              <span>Quality Foods</span>
                              <ul className="ratings">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <p>
                            Sed ut perspiciatis unde omnis iste natuses
                            voluptatem accusantium doloremque lauda ntium totam
                            rem aperiam eaque ipsa quaeab inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem voluptas sit aspernatur{" "}
                          </p>
                          <div className="author-title-qoute d-flex">
                            <div className="quote">
                              <i className="fas fa-quote-right" />
                            </div>
                            <div className="author-title">
                              <h4>Michael R. Jordan</h4>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item-four">
                        <div className="testimonial-content">
                          <div className="client-review-box d-flex justify-content-between">
                            <div className="client-thumb mb-10">
                              <img
                                src="assets/images/testimonial/company-1.png"
                                alt=""
                              />
                            </div>
                            <div className="review-box mb-10">
                              <span>Quality Foods</span>
                              <ul className="ratings">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <p>
                            Sed ut perspiciatis unde omnis iste natuses
                            voluptatem accusantium doloremque lauda ntium totam
                            rem aperiam eaque ipsa quaeab inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem voluptas sit aspernatur{" "}
                          </p>
                          <div className="author-title-qoute d-flex">
                            <div className="quote">
                              <i className="fas fa-quote-right" />
                            </div>
                            <div className="author-title">
                              <h4>Jordan Michael</h4>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                    <div className="testimonial-dots" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-section pt-90 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Actualidad</span>
                <h2>Últimas Noticias, Eventos y Artículos de Interés</h2>
                <p style={{ marginTop: "15px", fontSize: "14px" }}>
                  Mantente informado sobre las novedades, oportunidades y
                  desarrollos en la porcicultura y especies menores del
                  Magdalena Medio
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {posts &&
              posts.length > 0 &&
              posts.map((post, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="blog-post-item-four mb-40 wow fadeInUp">
                    <div className="post-thumbnail">
                      <img src={post.cover} alt="Post Image" />
                      <a
                        href={`blog-details/${post._id}`}
                        className="post-date"
                      >
                        {dayjs(post.createdAt).date()}{" "}
                        <span>{dayjs(post.createdAt).format("MMM")}</span>
                      </a>
                    </div>
                    <div className="entry-content">
                      <div className="content-inner">
                        <div className="post-meta">
                          <ul>
                            <li>
                              <span>
                                <a href="#" className="cat-btn">
                                  {post.TYPE.name}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="far fa-comments" />
                                <a href={`blog-details/${post._id}`}></a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h3 className="title">
                          <Link
                            legacyBehavior
                            href={`blog-details/${post._id}`}
                          >
                            <a>{post.title}</a>
                          </Link>
                        </h3>
                        <p>{post.subtitle}</p>
                      </div>
                      <div className="read-more">
                        <a
                          href={`blog-details/${post._id}`}
                          className="main-btn bordered-btn"
                        >
                          Leer mas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Partner Section ======*/}
      <section className="partners-one p-r z-1 pb-150">
        <div className="container">
          <div className="partners-wrapper border-top-1 pt-80">
            <Slider
              {...logoSlider}
              className="partner-slider-one wow fadeInDown"
            >
              <div className="partner-item-two">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-7.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item-two">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-8.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item-two">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-9.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item-two">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-10.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item-two">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-11.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item-two">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-12.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item-two">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-10.png"
                    alt="partner image"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
