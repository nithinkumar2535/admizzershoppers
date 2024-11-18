import React from "react";

const SaleSection = () => {
  return (
    <div className="site-section block-8">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Big Sale!</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-7 mb-5">
            <a href="#">
              <img
                src="https://source.unsplash.com/random/800x600"
                alt="Big Sale"
                className="img-fluid rounded"
              />
            </a>
          </div>
          <div className="col-md-12 col-lg-5 text-center pl-md-5">
            <h2>
              <a href="#">50% less in all items</a>
            </h2>
            <p className="post-meta mb-4">
              By <a href="#">Carl Smith</a>{" "}
              <span className="block-8-sep">&bull;</span> September 3, 2018
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              iste dolor accusantium facere corporis ipsum animi deleniti
              fugiat. Ex, veniam?
            </p>
            <p>
              <a href="#" className="btn btn-primary btn-sm">
                Shop Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
