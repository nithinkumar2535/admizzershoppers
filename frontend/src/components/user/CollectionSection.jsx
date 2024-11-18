import React from "react";

function CollectionsSection() {
  return (
    <div className="site-section site-blocks-2">
      <div className="container">
        <div className="row">
          <div
            className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade"
          >
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="images/women.jpg" alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Women</h3>
              </div>
            </a>
          </div>
          <div
            className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
            data-aos="fade"
            data-aos-delay="100"
          >
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="images/children.jpg" alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Children</h3>
              </div>
            </a>
          </div>
          <div
            className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
            data-aos="fade"
            data-aos-delay="200"
          >
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="images/men.jpg" alt="" className="img-fluid" />
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Men</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionsSection;
