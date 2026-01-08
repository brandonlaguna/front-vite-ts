import Link from "next/link";
import Slider from "react-slick";
import OrgariumCounter from "../src/components/OrgariumCounter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { logoSlider } from "../src/sliderProps";
const About = () => {
  return (
    <Layout header={4}>
      <PageBanner pageName={"Acerca de nosotros"} />
      <section className="about-section p-r z-1 pt-170 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50">
                <div className="section-title section-title-left wow fadeInUp mb-30">
                  <span className="sub-title">Acerca de nosotros</span>
                  <h2>
                    Asociación Campesina de Porcicultores y Criadores de
                    Especies Menores del Magdalena Medio
                  </h2>
                </div>
                <p>
                  En ASOPORKMAG somos una asociación campesina con 16 años de
                  trayectoria que integra a porcicultores y criadores de
                  especies menores (porcinos, ovinos, caprinos y otros) del
                  Distrito de Barrancabermeja, la Región del Magdalena Medio y
                  otras zonas del país. Nacemos y trabajamos bajo los principios
                  de asociatividad y economía popular y comunitaria, articulando
                  a personas naturales y jurídicas que participan directa o
                  indirectamente en la producción, mejoramiento, transformación
                  y comercialización de la actividad pecuaria de especies
                  menores.
                </p>
                <p>Nos enfocamos en:</p>
                <div className="choose-item-list wow fadeInDown">
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>
                        Fortalecer la productividad y sostenibilidad de las
                        unidades productivas de nuestros afiliados.
                      </h5>
                      {/* <p>
                        Accusantium doloremque laudatium, totam rem aperiam
                        inventore veritatis et quasi architecto beatae{" "}
                      </p> */}
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>
                        Articular oportunidades de negocio y encadenamientos
                        productivos con aliados públicos y privados.
                      </h5>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Modern Euipments</h5>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>
                        Representar y defender los intereses gremiales de
                        nuestros asociados ante entidades territoriales,
                        sectoriales y nacionales.
                      </h5>
                    </div>
                  </div>
                  <p>
                    Somos el aliado estratégico de los productores de especies
                    menores que quieren crecer, formalizarse y competir en
                    mercados de mayor valor, incorporando de manera responsable
                    el cuidado del entorno y el respeto por el medio ambiente.
                  </p>
                </div>
                {/* <div className="about-button wow fadeInUp">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-yellow">Learn More Us</a>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four_image-box text-right p-r mb-50 wow fadeInRight">
                <img
                  src="assets/images/about/4.jpg"
                  className="about-img_one"
                  alt=""
                />
                <img
                  src="assets/images/about/5.jpg"
                  className="about-img_two"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Mission Vision Section ======*/}
      <section className="mission-vision-section p-r z-1 pt-130 pb-100 dark-black-bg">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center wow fadeInDown">
                <span className="sub-title white-text">Nuestra dirección</span>
                <h2 className="white-text">Misión y Visión</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 mb-50 wow fadeInLeft">
              <div
                className="mission-box p-50"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  border: "1px solid #FDC72F",
                  minHeight: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div className="icon mb-30" style={{ textAlign: "center" }}>
                  <i
                    className="fas fa-bullseye"
                    style={{ fontSize: "45px", color: "#FDC72F" }}
                  />
                </div>
                <h3
                  className="title mb-20"
                  style={{ color: "#fff", textAlign: "center" }}
                >
                  Misión
                </h3>
                <p
                  style={{ color: "#ccc", lineHeight: "1.8", fontSize: "14px" }}
                >
                  En ASOPORKMAG reunimos y fortalecemos a los productores
                  porcinos y de otras especies menores del Distrito de
                  Barrancabermeja y la Región del Magdalena Medio, a través de
                  la asociatividad, la capacitación, la asistencia técnica, la
                  representación gremial y la gestión de proyectos, para
                  impulsar sistemas productivos sostenibles, rentables y
                  competitivos, basados en la economía popular y comunitaria y
                  con un enfoque de respeto por el medio ambiente.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-50 wow fadeInRight">
              <div
                className="vision-box p-50"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  border: "1px solid #FDC72F",
                  minHeight: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div className="icon mb-30" style={{ textAlign: "center" }}>
                  <i
                    className="fas fa-eye"
                    style={{ fontSize: "45px", color: "#FDC72F" }}
                  />
                </div>
                <h3
                  className="title mb-20"
                  style={{ color: "#fff", textAlign: "center" }}
                >
                  Visión
                </h3>
                <p
                  style={{ color: "#ccc", lineHeight: "1.8", fontSize: "14px" }}
                >
                  Ser la asociación campesina de porcicultores y criadores de
                  especies menores líder en el Magdalena Medio, reconocida por
                  articular la economía popular y comunitaria con mercados de
                  alto valor, generando ingresos sostenibles, competitividad y
                  mejor calidad de vida para nuestros afiliados y sus familias,
                  en armonía con el entorno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Mission Vision Section ======*/}
      {/*====== Start Strategic Objectives Section ======*/}
      <section className="strategic-objectives pt-130 pb-100 p-r z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-70 wow fadeInDown">
                <span className="sub-title">Estrategia</span>
                <h2>Objetivos Estratégicos</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-50 wow fadeInUp">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-star"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <h3 className="title">Posicionamiento</h3>
                <p>
                  Posicionar a ASOPORKMAG como aliado estratégico en el
                  Magdalena Medio para productores de especies menores.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-50 wow fadeInDown">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-tractor"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <h3 className="title">Fortalecimiento</h3>
                <p>
                  Fortalecer la productividad y calidad de las unidades
                  productivas de nuestros afiliados.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-50 wow fadeInUp">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-store"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <h3 className="title">Mercados</h3>
                <p>
                  Ampliar el acceso a mercados formales y encadenamientos
                  productivos de valor.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-50 wow fadeInDown">
              <div className="service-item-four text-center h-100">
                <div className="icon">
                  <i
                    className="fas fa-leaf"
                    style={{ fontSize: "40px", color: "#FDC72F" }}
                  />
                </div>
                <h3 className="title">Sostenibilidad</h3>
                <p>
                  Impulsar modelos productivos sostenibles y responsables con el
                  medio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Strategic Objectives Section ======*/}
      {/*====== Start Strategic Projects Section ======*/}
      <section className="strategic-projects pt-130 pb-100 p-r z-1 dark-black-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-70 wow fadeInDown">
                <span className="sub-title white-text">Portafolio</span>
                <h2 className="white-text">Proyectos Estratégicos</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-50 wow fadeInLeft">
              <div
                className="project-item p-40"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  border: "1px solid #FDC72F",
                  borderLeft: "4px solid #FDC72F",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "50px",
                      height: "50px",
                      backgroundColor: "#FDC72F",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    1
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                      Fortalecimiento Técnico y Productivo
                    </h4>
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      Mejora de productividad, calidad y sostenibilidad mediante
                      formación, asistencia técnica, tecnificación y registros
                      productivos en fincas de afiliados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-50 wow fadeInRight">
              <div
                className="project-item p-40"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  border: "1px solid #FDC72F",
                  borderLeft: "4px solid #FDC72F",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "50px",
                      height: "50px",
                      backgroundColor: "#FDC72F",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    2
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                      Asociatividad y Economía Popular
                    </h4>
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      Fortalecimiento de organización colectiva para compras y
                      ventas conjuntas, con talleres de liderazgo y gobernanza
                      interna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-50 wow fadeInUp">
              <div
                className="project-item p-40"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  border: "1px solid #FDC72F",
                  borderLeft: "4px solid #FDC72F",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "50px",
                      height: "50px",
                      backgroundColor: "#FDC72F",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    3
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                      Encadenamientos y Acceso a Mercados
                    </h4>
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      Inclusión en encadenamientos locales, regionales y
                      nacionales con mejores condiciones de venta y posible
                      marca colectiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-50 wow fadeInDown">
              <div
                className="project-item p-40"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  border: "1px solid #FDC72F",
                  borderLeft: "4px solid #FDC72F",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "50px",
                      height: "50px",
                      backgroundColor: "#FDC72F",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    4
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                      Emprendimiento y Micronegocios
                    </h4>
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      Creación de unidades económicas de baja escala con
                      formación en modelo de negocio y acceso a microcrédito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInLeft">
              <div
                className="project-item p-40"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  border: "1px solid #FDC72F",
                  borderLeft: "4px solid #FDC72F",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "50px",
                      height: "50px",
                      backgroundColor: "#FDC72F",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    5
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                      Escuela de Formación y Relevo Generacional
                    </h4>
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      Desarrollo de talento humano con alianzas SENA e
                      instituciones educativas para jóvenes y mujeres rurales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInRight">
              <div
                className="project-item p-40"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  border: "1px solid #FDC72F",
                  borderLeft: "4px solid #FDC72F",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "50px",
                      height: "50px",
                      backgroundColor: "#FDC72F",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    6
                  </div>
                  <div>
                    <h4 style={{ color: "#fff", marginBottom: "10px" }}>
                      Representación Gremial y Articulación
                    </h4>
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "13px",
                        lineHeight: "1.6",
                      }}
                    >
                      Posicionamiento como vocero legítimo en mesas sectoriales,
                      agendas de incidencia y alianzas estratégicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Strategic Projects Section ======*/}
      {/*====== Start Partners Section ======*/}
      {/* <section className="partners-section">
        <div className="container-1350">
          <div className="partners-wrap-two yellow-bg pb-60 pt-50 p-r z-1">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-30 wow fadeInUp">
                  <h4>Aliados estrategicos</h4>
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
      </section>{" "} */}
      {/*====== End Partners Section ======*/}
      {/*====== Start Farmers Section ======*/}
      {/* <section className="farmers-team_two light-gray-bg pb-90">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="section-title section-title-left mb-50 wow fadeInLeft">
                <span className="sub-title">Our Farmers</span>
                <h2>We Have Lot’s Of Experience Team Members</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-button float-lg-right mb-60 wow fadeInRight">
                <Link legacyBehavior href="/farmers">
                  <a className="main-btn bordered-btn bordered-yellow">
                    Become a Member
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/img-1.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link legacyBehavior href="/farmers">
                      <a>Dennis P. Russell</a>
                    </Link>
                  </h3>
                  <p className="position">Food Farmers</p>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/img-2.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link legacyBehavior href="/farmers">
                      <a>David M. Hower</a>
                    </Link>
                  </h3>
                  <p className="position">General Manager</p>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/img-3.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link legacyBehavior href="/farmers">
                      <a>Richard M. Howell</a>
                    </Link>
                  </h3>
                  <p className="position">Food Farmers</p>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/img-4.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link legacyBehavior href="/farmers">
                      <a>Keneth R. Williams</a>
                    </Link>
                  </h3>
                  <p className="position">Food Farmers</p>
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
        </div>
      </section> */}
      {/*====== End Farmers Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/* <section className="testimonial-section pt-130">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Clients Feedback</span>
                <h2>What’s Our Clients Say About Our Organic Foods</h2>
              </div>
            </div>
          </div>
          <Slider {...testimonialSliderOne} className="testimonial-slider-one">
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-1.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Michael R. Jordan</h4>
                  <p className="position">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInUp">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-2.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Nathan A. Caswell</h4>
                  <p className="position">Senior Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-3.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Somalia D. Silva</h4>
                  <p className="position">Business Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInUp">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-4.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Michael D. Slaughter</h4>
                  <p className="position">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-2.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Nathan A. Caswell</h4>
                  <p className="position">Senior Manager</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      <div style={{ height: 200 }}></div>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section className="fun-fact-one pt-60 pb-130">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp">
            <span className="sub-title">Nuestra trayectoria</span>
            <h2>Estadísticas de ASOPORKMAG</h2>
          </div>
          <div className="counter-wrap-one wow fadeInDown">
            <div className="counter-inner-box">
              <OrgariumCounter />
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section ======*/}
    </Layout>
  );
};
export default About;
