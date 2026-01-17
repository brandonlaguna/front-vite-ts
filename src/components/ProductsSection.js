import Link from "next/link";
import Slider from "react-slick";
import { recentProductSlider } from "../sliderProps";

const ProductsSection = ({ products }) => {
  return (
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
  );
};

export default ProductsSection;