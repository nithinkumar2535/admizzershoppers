import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="site-section block-3 site-blocks-2 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="nonloop-block-3 owl-carousel">
              {/* Example Product 1 */}
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img
                      src="https://source.unsplash.com/random/300x300"
                      alt="Product 1"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>
                      <a href="#">Tank Top</a>
                    </h3>
                    <p className="mb-0">Finding perfect t-shirt</p>
                    <p className="text-primary font-weight-bold">$50</p>
                    <a className="viewm-more" href="shop-single.html">
                      View Product
                    </a>
                  </div>
                </div>
              </div>
              {/* Example Product 2 */}
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img
                      src="https://source.unsplash.com/random/301x300"
                      alt="Product 2"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>
                      <a href="#">Corater</a>
                    </h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">$50</p>
                    <a className="viewm-more" href="shop-single.html">
                      View Product
                    </a>
                  </div>
                </div>
              </div>
              {/* Example Product 3 */}
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img
                      src="https://source.unsplash.com/random/302x300"
                      alt="Product 3"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>
                      <a href="#">Polo Shirt</a>
                    </h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">$50</p>
                    <a className="viewm-more" href="shop-single.html">
                      View Product
                    </a>
                  </div>
                </div>
              </div>
              {/* Example Product 4 */}
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img
                      src="https://source.unsplash.com/random/303x300"
                      alt="Product 4"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>
                      <a href="#">T-Shirt Mockup</a>
                    </h3>
                    <p className="mb-0">Finding perfect products</p>
                    <p className="text-primary font-weight-bold">$50</p>
                    <a className="viewm-more" href="shop-single.html">
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
