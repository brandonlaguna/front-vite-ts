import Link from "next/link";
import { Component } from "react";
import Slider from "react-slick";
import { heroSliderTwo } from "../../sliderProps";
export default class Hero4Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="hero-area-four">
        <Slider
          {...heroSliderTwo}
          ref={(c) => (this.slider = c)}
          className="hero-slider-two"
        >
          {/* Slide 1: Portada Principal */}
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/pascal-debrunner-b-zyMn_e_R4-unsplash.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      16 Años de Trayectoria
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      ASOPORKMAG
                    </h1>
                    <p style={{ fontSize: "18px" }}>
                      Asociación Campesina de Porcicultores y Criadores de
                      Especies Menores del Magdalena Medio. Fortaleciendo la
                      porcicultura, economía popular y sostenibilidad ambiental.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">
                          Conoce Nuestra Historia
                        </a>
                      </Link>
                      <Link legacyBehavior href="/portfolio-grid">
                        <a className="main-btn btn-white">
                          Proyectos Estratégicos
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
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
          </div>

          {/* Slide 2: Misión */}
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/annie-spratt-_Y5ppMWVYkk-unsplash.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Nuestra Misión
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                      Impulsamos Sistemas Productivos Sostenibles
                    </h2>
                    <p>
                      Reunimos y fortalecemos a productores porcinos y de
                      especies menores a través de asociatividad, capacitación,
                      asistencia técnica y gestión de proyectos, promoviendo
                      economía popular, competitividad y respeto ambiental.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">Descubre Más</a>
                      </Link>
                      <Link legacyBehavior href="/portfolio-grid">
                        <a className="main-btn btn-white">Nuestros Proyectos</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
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
          </div>

          {/* Slide 3: Visión */}
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/onur-tuna-UHwKHS6Fhqs-unsplash.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Nuestra Visión
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                      Líderes en el Magdalena Medio
                    </h2>
                    <p>
                      Ser la asociación campesina reconocida por articular
                      economía popular con mercados de alto valor, generando
                      ingresos sostenibles, competitividad y mejor calidad de
                      vida para nuestros afiliados y sus familias, en armonía
                      con el entorno.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">
                          Lee Acerca de Nosotros
                        </a>
                      </Link>
                      <Link legacyBehavior href="/portfolio-grid">
                        <a className="main-btn btn-white">
                          Conoce Nuestro Impacto
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
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
          </div>

          {/* Slide 4: ¿Qué Hacemos? */}
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/bill-fairs-1j9Yrl0nW10-unsplash.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Nuestro Enfoque
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                      Articulación Productiva Integral
                    </h2>
                    <p>
                      Conectamos productores con compradores, instituciones y
                      aliados estratégicos. Promovemos producción, mejoramiento,
                      transformación y comercialización de especies menores de
                      calidad con responsabilidad ambiental.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">Entérate de Más</a>
                      </Link>
                      <Link legacyBehavior href="/portfolio-grid">
                        <a className="main-btn btn-white">Ver Programas</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
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
          </div>

          {/* Slide 5: Propuesta de Valor para Afiliados */}
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/anshul-R_TGQmPe4b4-unsplash.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Para Nuestros Afiliados
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                      Valor y Oportunidades
                    </h2>
                    <p>
                      Ofrecemos capacitación técnica, asistencia en finca,
                      acompañamiento organizativo, gestión de proyectos,
                      representación gremial y acceso a nuevos mercados formales
                      para crecer competitivamente.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/farmers">
                        <a className="main-btn btn-yellow">
                          Únete a ASOPORKMAG
                        </a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn btn-white">Contáctanos</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
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
          </div>

          {/* Slide 6: Portafolio de Proyectos */}
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/bri-tucker-BSvRfFDCO7U-unsplash.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Proyectos Estratégicos
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                      Fortalecimiento Integral
                    </h2>
                    <p>
                      Desde formación técnica hasta emprendimiento rural,
                      encadenamientos productivos, economía popular, relevo
                      generacional con jóvenes y mujeres, representación gremial
                      y sostenibilidad ambiental.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">
                          Descubre Proyectos
                        </a>
                      </Link>
                      <Link legacyBehavior href="/portfolio-grid">
                        <a className="main-btn btn-white">Programas</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
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
          </div>

          {/* Slide 7: Sostenibilidad y Compromiso Ambiental */}
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/monika-kubala-RBpK9tlVWCg-unsplash.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Compromiso Ambiental
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                      Producción Sostenible y Responsable
                    </h2>
                    <p>
                      Promovemos prácticas productivas ambientalmente
                      sostenibles, bienestar animal, eficiencia en recursos
                      naturales y responsabilidad con el entorno en toda la
                      cadena productiva.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">
                          Conoce Nuestro Compromiso
                        </a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn btn-white">
                          Trabaja Con Nosotros
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
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
          </div>

          {/* Slide 8: Alianza y Oportunidades */}
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/henrique-s-ruzzon-u1vOLCULaik-unsplash.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Alianzas Estratégicas
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                      Juntos Crecemos Más
                    </h2>
                    <p>
                      Somos interlocutor organizado para empresas, instituciones
                      públicas y privadas. Ofrecemos productores confiables,
                      volumen garantizado, trazabilidad y facilidad para
                      implementar proyectos en territorio.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">Nuestras Alianzas</a>
                      </Link>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn btn-white">Contacto Comercial</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
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
          </div>
        </Slider>
        <div className="hero-arrows">
          <div className="prev slick-arrow" onClick={this.previous}>
            <i className="fa fa-arrow-left" />
          </div>
          <div className="next slick-arrow" onClick={this.next}>
            <i className="fa fa-arrow-right" />
          </div>
        </div>
      </section>
    );
  }
}
