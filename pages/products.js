import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { useEffect, useState } from "react";
import ProductsService from "../src/services/productsService";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [enableAddProduct, setEnableAddProduct] = useState(false);

  //METHODS
  const handleEnableAddProduct = () => {
    setEnableAddProduct(!enableAddProduct);
  };

  //EFFECTS
  useEffect(() => {
    try {
      ProductsService.getAll({})
        .then((response) => {
          setProducts(response.response);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
      return () => {
        setProducts([]);
      };
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }, []);
  return (
    <Layout header={4}>
      <PageBanner pageTitle={"Productos"} pageName="Productos" />
      <section className="shaop-page pt-170 pb-70">
        <div className="container">
          <div className="product-search-filter wow fadeInUp">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="product-search mb-30">
                    <div className="form_group">
                      <input
                        type="search"
                        className="form_control"
                        placeholder="Search"
                        name="search"
                      />
                      <button className="search-btn">
                        <i className="far fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row justify-content-between align-items-center mb-15">
                    <div className="col-lg-4 col-md-6">
                      <div className="show-text mb-15">
                        <p>Showing 1 - 12 of 30 Results</p>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                      <div className="filter-category mb-15">
                        <ul>
                          <li>
                            <select className="wide">
                              <option data-display="Sort by Newness">
                                Sort by Newness
                              </option>
                              <option value={1}>Price High To Low</option>
                              <option value={2}>Price Low To High</option>
                            </select>
                          </li>
                          <li>
                            <a href="#" onClick={handleEnableAddProduct}>
                              <i
                                onClick={handleEnableAddProduct}
                                className={`icon-rotate ${
                                  enableAddProduct ? "rotate" : ""
                                } ${
                                  enableAddProduct
                                    ? "fa-solid fa-xmark"
                                    : "fa-solid fa-plus"
                                }`}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" onClick={handleEnableAddProduct}>
                              <i class="fa-solid fa-arrows-rotate" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="card shadow">
            {enableAddProduct && (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="form_group card col-xl-6">
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Nombre"
                      name="name"
                      required=""
                    />
                  </div>
                  <div className="form_group card col-xl-6">
                    <input
                      type="number"
                      className="form_control"
                      placeholder="Precio"
                      name="price"
                      required=""
                    />
                  </div>
                  <div className="form_group card col-xl-6">
                    <input
                      type="number"
                      className="form_control"
                      placeholder="Stock"
                      name="stock"
                      required=""
                    />
                  </div>
                  <div className="form_group card col-xl-6">
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Categoria"
                      name="category"
                      required=""
                    />
                  </div>
                  <div className="form_group card col-xl-6">
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Tipo"
                      name="type"
                      required=""
                    />
                  </div>
                  <div className="form_group card col-xl-6">
                    <input type="file" name="image" required />
                  </div>
                  <div className="form_group card col-xl-6">
                    <textarea
                      className="form_control"
                      placeholder="Descripcion"
                      name="description"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form_group col-xl-12">
                    <button className="main-btn btn-yellow">Guardar</button>
                  </div>
                </div>
              </form>
            )}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="products-wrapper">
                <div className="row">
                  {products.length === 0 && <p>Loading products...</p>}
                  {products.length > 0 &&
                    products.map((product, index) => (
                      <div
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                        key={index}
                      >
                        <div className="single-product-item mb-60 wow fadeInUp">
                          <div className="product-img">
                            <img src={product?.image[0]} alt="" />
                            <div className="pc-btn">{product?.category}</div>
                            <div className="cart-button">
                              <Link legacyBehavior href="/products">
                                <a className="main-btn btn-yellow">
                                  Ver Producto
                                </a>
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
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Shop;
