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
import dayjs from "dayjs";
import UsersService from "../src/services/usersService";
import ProductsService from "../src/services/productsService";
const Index = () => {
  const [active, setActive] = useState("collapse0");

  const [posts, setPosts] = useState([]);
  const [usersMembers, setUsersMembers] = useState([]);
  const [products, setProducts] = useState([]);

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
                    <span className="sub-title">Nosotros</span>
                    <h2>
                      Asociación Campesina de Porcicultores y Criadores de
                      Especies Menores del Magdalena Medio
                    </h2>
                  </div>
                  <p>
                    16 años fortaleciendo la porcicultura y las especies menores
                    en el Magdalena Medio, promoviendo el respeto por el medio
                    ambiente a lo largo de la cadena productiva.
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
                  <span className="sub-title">Producimos</span>
                  <h2>Que producimos para usted</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-13.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Fresh Cows Meat and Milks</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div> */}
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
              {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInUp">
                  <div className="icon">
                    <img src="assets/images/icon/icon-15.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Fresh Duck Meat and Eggs</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <img src="assets/images/icon/icon-16.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Fresh Sheep Meat and Milks</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInUp">
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
              {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <img src="assets/images/icon/icon-18.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Fresh Goat Meat and Milks</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div> */}
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
              {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="single-category-box text-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <img src="assets/images/icon/icon-20.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <Link legacyBehavior href="/">
                        <a>Fresh Hen Meat and Eggs</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div> */}
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
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-130">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-60 wow fadeInLeft">
                <span className="sub-title">Nuestros miembros</span>
                <h2></h2>
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
                      <p className="position">Miembro</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>0 Miembros</p>
            )}
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Project Section ======*/}
      {/* <section className="project-section pt-90">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Project Gallery</span>
                <h2>
                  We’ve Done Many Other Projects Let’s See Gallery Insights
                </h2>
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
        </div>
      </section> */}
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
                    View More Products
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
                    <span className="tag-line">contacto</span>
                    <h2>Necesitas...</h2>
                    <p>....</p>
                    <Link legacyBehavior href="/farmers">
                      <a className="main-btn bordered-btn">
                        Ponte en contacto con nosotros
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
                  <span className="sub-title"></span>
                  <h2>Need Oragnic Foods! Send Us Message</h2>
                </div>
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Full Name"
                        name="name"
                        required=""
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        className="form_control"
                        placeholder="Write Message"
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn btn-yellow">
                        Send Us Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="map-box_one ml-lg-70 wow fadeInRight">
                <div className="map-box mb-50">
                  <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
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
                <span className="sub-title">Últimas noticias &amp; Blogs</span>
                <h2>
                  Lea las últimas noticias &amp; el blog. Reciba todas las
                  actualizaciones.
                </h2>
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
