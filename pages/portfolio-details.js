import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { projectsSliderOne } from "../src/sliderProps";
const PortfolioDetails = () => {
  return (
    <Layout header={4}>
      <PageBanner
        pageTitle={"Portafolio"}
        pageName="Programa de Fortalecimiento Técnico y Productivo Porcino y de Especies Menores"
      />
      <section className="project-details-page pt-170 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-wrapper">
                <div className="img-holder mb-50">
                  <img
                    src="assets/images/portfolio/single-portfolio-1.jpg"
                    alt=""
                  />
                </div>
                <div className="project-content pb-75">
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">
                          Desarrollo detallado del Programa de Fortalecimiento
                          Técnico y Productivo
                        </h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Categoria</h4>
                              <p>Programa</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Clientes</h4>
                              <p>Poblacion</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Fecha</h4>
                              <p>25 February 2022</p>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            Programa de Fortalecimiento Técnico y Productivo
                            Porcino y de Especies Menores de ASOPORKMAG
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">Antecedentes / Problema</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="content">
                          En el Distrito de Barrancabermeja y la Región del
                          Magdalena Medio, gran parte de la producción porcina y
                          de especies menores se desarrolla en unidades
                          productivas campesinas de pequeña escala, con
                          limitaciones en acceso a asistencia técnica,
                          implementación de buenas prácticas pecuarias,
                          infraestructura básica adecuada y uso de registros
                          productivos y económicos. Estas condiciones afectan la
                          productividad, la rentabilidad y la capacidad de
                          acceder a mercados formales o de mayor valor.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">Justificación</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="content">
                          ASOPORKMAG, con 16 años de existencia como asociación
                          campesina, agrupa productores porcinos y de otras
                          especies menores que requieren un acompañamiento
                          estructurado y sostenido para mejorar productividad y
                          calidad, avanzar hacia un manejo más técnico, rentable
                          y sostenible, y estar en mejores condiciones para
                          articularse a programas institucionales y a nuevos
                          mercados. Un programa integral de fortalecimiento
                          técnico y productivo permite elevar la capacidad
                          técnica, reducir pérdidas, mejorar indicadores clave y
                          dejar capacidades instaladas en las fincas mediante
                          planes de mejora, infraestructura básica y registros
                          productivos.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">Objetivo general</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="content">
                          Mejorar la productividad, calidad y sostenibilidad de
                          las explotaciones porcinas y de especies menores de
                          los afiliados a ASOPORKMAG mediante procesos de
                          formación, asistencia técnica en finca, tecnificación
                          progresiva e implementación de registros productivos y
                          económicos.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">Objetivos específicos</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="content">
                          <ol type="A">
                            <li>
                              Fortalecer las capacidades técnicas de los
                              productores en buenas prácticas de manejo,
                              alimentación, sanidad y bienestar animal.
                            </li>
                            <li>
                              Acompañar a los productores en la implementación
                              de planes de mejora productiva y sanitaria en sus
                              unidades.
                            </li>
                            <li>
                              Promover la tecnificación básica de las unidades
                              productivas mediante mejoras graduales en
                              infraestructura y manejo.
                            </li>
                            <li>
                              mplementar herramientas simples de registro
                              productivo y económico que permitan decisiones
                              informadas y visión empresarial campesina.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="post-navigation border-top-1 pt-80">
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="post-navigation-item prev-navigation d-flex align-items-center">
                        <div className="thumb">
                          <img
                            src="assets/images/portfolio/prev-nav.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text">
                          <h4>
                            <Link legacyBehavior href="/portfolio-details">
                              <a>Organic Vegetables</a>
                            </Link>
                          </h4>
                          <p>
                            <a href="#">Food</a>, <a href="#">Organic</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="post-navigation-icon text-center">
                        <img src="assets/images/bar.png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="post-navigation-item next-navigation d-flex align-items-center">
                        <div className="thumb">
                          <img
                            src="assets/images/portfolio/next-nav.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text">
                          <h4>
                            <Link legacyBehavior href="/portfolio-details">
                              <a>Organic Cows</a>
                            </Link>
                          </h4>
                          <p>
                            <a href="#">Food</a>, <a href="#">Organic</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Portfolio Details ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <section className="projects-section pt-130 pb-130 p-r z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-9">
              <div className="section-title section-title-left mb-60 wow fadeInLeft">
                <span className="sub-title">Project Gallery</span>
                <h2>
                  We’ve Done Many Other Projects Let’s See Gallery Insights
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="project-arrows mb-60 float-md-right wow fadeInRight" />
            </div>
          </div>
          <Slider {...projectsSliderOne} className="projects-slider-one">
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-1.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-2.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-3.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-2.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-3.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>{" "} */}
    </Layout>
  );
};
export default PortfolioDetails;
