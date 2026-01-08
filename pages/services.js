import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import TestimonialSlider from "../src/components/sliders/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import { logoSlider, projectsSliderTwo } from "../src/sliderProps";
const Services = () => {
  return (
    <Layout header={4}>
      <PageBanner pageName={"Servicios"} />
      <section className="service-section pt-170 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title section-title-left mb-50 wow fadeInLeft">
                <span className="sub-title">Nuestros Servicios</span>
                <h2>Qué Ofrecemos a Nuestros Afiliados</h2>
              </div>
            </div>
            <div className="col-lg-6 mb-50">
              <p className="wow fadeInRight">
                En ASOPORKMAG ofrecemos un programa integral de fortalecimiento
                técnico y productivo diseñado para mejorar la competitividad y
                sostenibilidad de tus unidades productivas. Contamos con
                profesionales especializados y alianzas estratégicas para
                proporcionar acompañamiento continuo y soluciones adaptadas a tu
                contexto.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
                <div className="icon">
                  <i
                    className="fas fa-graduation-cap"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Capacitación en Buenas Prácticas</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInDown">
                <div className="icon">
                  <i
                    className="fas fa-tools"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Asistencia Técnica en Finca</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
                <div className="icon">
                  <i
                    className="fas fa-building"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Tecnificación Básica</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInDown">
                <div className="icon">
                  <i
                    className="fas fa-chart-bar"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Registros Productivos</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Skill Section ======*/}
      <section className="skill-section-two pt-lg-130">
        <div className="container-fluid">
          <div
            className="skill-wrapper-one pb-90 bg_cover"
            style={{ backgroundImage: "url(assets/images/bg/skill-bg-2.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="skill-two_content-box content-box-gap mb-40 wow fadeInUp">
                    <div className="section-title section-title-left mb-30">
                      <span className="sub-title">Experiencia</span>
                      <h2>
                        16 años Fortaleciendo la Porcicultura y Especies Menores
                      </h2>
                    </div>
                    <p>
                      Con más de una década y media de trayectoria, ASOPORKMAG
                      ha consolidado un programa integral de fortalecimiento que
                      abarca desde capacitación técnica hasta asistencia directa
                      en fincas, con resultados comprobados en productividad,
                      sostenibilidad y acceso a mercados de mayor valor.
                    </p>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>
                          Productores Capacitados<span>85%</span>
                        </h5>
                      </div>
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "85%" }}
                      />
                      <div className="progress" />
                    </div>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>
                          Mejora Productividad<span>78%</span>
                        </h5>
                      </div>
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "78%" }}
                      />
                      <div className="progress" />
                    </div>
                    <div className="skill-button">
                      <Link legacyBehavior href="/about">
                        <a className="main-btn bordered-btn">Conocer Más</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Skill Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="popular-service pt-130 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Servicios Populares</span>
                <h2>Líneas de Acción del Programa de Fortalecimiento</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <i
                    className="fas fa-chalkboard-user"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Jornadas Presenciales y Virtuales</a>
                    </Link>
                  </h3>
                  <p>
                    Talleres de formación en buenas prácticas pecuarias, manejo
                    sanitario y modelos de negocio
                  </p>
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInDown">
                <div className="icon">
                  <i
                    className="fas fa-clipboard-check"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Diagnósticos Productivos</a>
                    </Link>
                  </h3>
                  <p>
                    Evaluación integral de tu unidad productiva y análisis de
                    oportunidades de mejora
                  </p>
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <i
                    className="fas fa-file-contract"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Planes de Mejora Personalizados</a>
                    </Link>
                  </h3>
                  <p>
                    Planes a medida con metas específicas adaptadas a tu
                    contexto y capacidades
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-holder mb-50 wow fadeInDown">
                <img
                  src="assets/images/service/img-1.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-item mb-50 card-rtl wow fadeInDown">
                <div className="icon">
                  <i
                    className="fas fa-tractor"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Visitas Técnicas en Finca</a>
                    </Link>
                  </h3>
                  <p>
                    Acompañamiento directo de profesionales especializados en tu
                    unidad productiva
                  </p>
                </div>
              </div>
              <div className="single-service-item mb-50 card-rtl wow fadeInUp">
                <div className="icon">
                  <i
                    className="fas fa-chart-line"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Registros Económicos</a>
                    </Link>
                  </h3>
                  <p>
                    Herramientas simples para medir costos, márgenes y tomar
                    decisiones informadas
                  </p>
                </div>
              </div>
              <div className="single-service-item mb-50 card-rtl wow fadeInDown">
                <div className="icon">
                  <i
                    className="fas fa-lightbulb"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Material Didáctico Adaptado</a>
                    </Link>
                  </h3>
                  <p>
                    Recursos educativos contextualizados al Magdalena Medio y
                    especies menores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Partners Section ======*/}
      <section className="partners-section">
        <div className="container-1350">
          <div className="partners-wrap-three yellow-bg pb-60 pt-50 p-r z-1">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-30 wow fadeInUp">
                  <h4>Nuestros Aliados Estratégicos en el Magdalena Medio</h4>
                </div>
              </div>
            </div>
            <Slider
              {...logoSlider}
              className="partner-slider-one wow fadeInDown"
            >
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-1.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-2.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-3.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-4.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-5.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-6.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-3.png"
                    alt="partner image"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>{" "}
      {/*====== End Partners Section ======*/}
      {/*====== Start Portfolio Section ======*/}
      {/* <section className="projects-section pt-130">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Project Gallery</span>
                <h2>
                  We’ve Done Many Other Projects Let’s See Gallery Insights
                </h2>
              </div>
            </div>
          </div>
          <Slider {...projectsSliderTwo} className="projects-slider-two">
            <div className="project-item-two wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-25.jpg" alt="" />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <Link legacyBehavior href="/portfolio-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Cow Eating Gress From Farms</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item-two wow fadeOutDown">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-26.jpg" alt="" />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <Link legacyBehavior href="/portfolio-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Cow Eating Gress From Farms</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item-two wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-27.jpg" alt="" />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <Link legacyBehavior href="/portfolio-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
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
        </div>
      </section> */}
      {/*====== End Portfolio Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/* <section className="testimonial-three pt-130 pb-130">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section> */}
    </Layout>
  );
};
export default Services;
