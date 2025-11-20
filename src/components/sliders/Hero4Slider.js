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
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-four-slider-1.jpg)",
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
                      Somos
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      ASOPORKMAG
                    </h1>
                    <p>
                      Una Asociación Campesina de Porcicultores y Criadores de
                      Especies Menores del Magdalena Medio.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">
                          Lee acerca de nosotros
                        </a>
                      </Link>
                      <Link legacyBehavior href="/portfolio-grid">
                        <a className="main-btn btn-white">Ultimos proyectos</a>
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
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-four-slider-2.jpg)",
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
                      ¿Que hacemos?
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                      Articulamos productores con compradores, instituciones y
                      aliados estratégicos.
                    </h2>
                    <p>
                      Promoción de la producción, mejoramiento, transformación y
                      comercialización de especies menores.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">Enterate de más</a>
                      </Link>
                      <Link legacyBehavior href="/portfolio-grid">
                        <a className="main-btn btn-white">Ultimos proyectos</a>
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
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-four-slider-3.jpg)",
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
                      Portafolio
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                      Tenemos diferentes proyectos estratégicos, programas y
                      escuelas para ti.
                    </h2>
                    <p>
                      A partir del objeto social de ASOPORKMAG y de la
                      experiencia gremial e institucional construida, se propone
                      el siguiente portafolio de proyectos estratégicos a favor
                      de los asociados y afiliados.
                    </p>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">
                          Descubre proyectos
                        </a>
                      </Link>
                      <Link legacyBehavior href="/portfolio-grid">
                        <a className="main-btn btn-white">Descubre programas</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center"
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
            <i className="far fa-arrow-left" />
          </div>
          <div className="next slick-arrow" onClick={this.next}>
            <i className="far fa-arrow-right" />
          </div>
        </div>
      </section>
    );
  }
}
