import { useState } from "react";
import Layout from "../src/layouts/Layout";
import { Nav, Tab } from "react-bootstrap";

const MissionVision = () => {
  const [activeKey, setActiveKey] = useState("0");
  return (
    <Layout header={4}>
      <section className="about-section p-r z-1 pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-one_content-box mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">ASOPORKMAG</span>
                  <h4>
                    Asociación Campesina de Porcicultores y Criadores de
                    Especies Menores del Magdalena Medio
                  </h4>
                </div>
                <div
                  className="quote-text mb-35 wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  <p>
                    16 años fortaleciendo la porcicultura y las especies menores
                    en el Magdalena Medio, promoviendo el respeto por el medio
                    ambiente a lo largo de la cadena productiva.
                  </p>
                </div>
                <Tab.Container defaultActiveKey={"mission"}>
                  <div className="tab-content-box wow fadeInUp">
                    <Nav as={"ul"} className="nav nav-tabs mb-20">
                      <li className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="mission"
                          href="#mission"
                        >
                          Nuestra Misión
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="vision"
                          href="#vision"
                        >
                          Nuestra Vision
                        </Nav.Link>
                      </li>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane className="tab-pane fade" eventKey="mission">
                        <div className="content-box-gap">
                          <p>
                            En ASOPORKMAG reunimos y fortalecemos a los
                            productores porcinos y de otras especies menores del
                            Distrito de Barrancabermeja y la Región del
                            Magdalena Medio, a través de la asociatividad, la
                            capacitación, la asistencia técnica, la
                            representación gremial y la gestión de proyectos,
                            para impulsar sistemas productivos sostenibles,
                            rentables y competitivos, basados en la economía
                            popular y comunitaria y con un enfoque de respeto
                            por el medio ambiente.
                          </p>
                          {/* <div className="avatar-box d-flex align-items-center">
                            <div className="thumb">
                              <img
                                src="assets/images/user-1.jpg"
                                alt="Admin Thumb"
                              />
                            </div>
                            <div className="content">
                              <img src="assets/images/sign-1.png" alt="Sign" />
                            </div>
                          </div> */}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="vision">
                        <div className="content-box-gap">
                          <p>
                            Ser la asociación campesina de porcicultores y
                            criadores de especies menores líder en el Magdalena
                            Medio, reconocida por articular la economía popular
                            y comunitaria con mercados de alto valor, generando
                            ingresos sostenibles, competitividad y mejor calidad
                            de vida para nuestros afiliados y sus familias, en
                            armonía con el entorno.
                          </p>
                          {/* <div className="avatar-box d-flex align-items-center">
                            <div className="thumb">
                              <img
                                src="assets/images/user-1.jpg"
                                alt="Admin Thumb"
                              />
                            </div>
                            <div className="content">
                              <img src="assets/images/sign-1.png" alt="Sign" />
                            </div>
                          </div> */}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="about-one_image-box p-r mb-50 pl-100">
                <div className="about-img_one wow fadeInLeft">
                  <img src="assets/images/about/img-1.jpg" alt="About Image" />
                </div>
                <div className="about-img_two wow fadeInRight">
                  <img src="assets/images/about/img-2.jpg" alt="About Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default MissionVision;
