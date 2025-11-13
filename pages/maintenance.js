import Head from "next/head";
import { Fragment } from "react";
import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";

export const maintenanceSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export default function Maintenance() {
  return (
    <Fragment>
      <Head>
        <title>Asoporkmag</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <PageBanner pageName={"En Construccion"} hideHome />
      <section className="project-section pt-90">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Temas de interés</span>
                <h2>Accede a eventos importantes</h2>
              </div>
            </div>
          </div>
          <Slider {...maintenanceSlider} className="projects-slider-three">
            <div className="project-item-four wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/maintenance/desarrollo_porcicula.jpeg"
                  alt=""
                />
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
                        <a>Evento</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item-four wow fadeInDown">
              <div className="img-holder">
                <img
                  src="assets/images/maintenance/asociatividad_porcina.jpeg"
                  alt=""
                />
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
                        <a>Noticia</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Fragment>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  content: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "60px 40px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
  },
  icon: {
    fontSize: "80px",
    color: "#c0a156",
    marginBottom: "20px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  statusBox: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
    color: "#666",
  },
};
