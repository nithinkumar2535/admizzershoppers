import React from "react";

const HeroSection = () => {
  return (
    <div
      className="site-blocks-cover bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url(https://source.unsplash.com/random/1600x900)",
      }}
      data-aos="fade"
    >
      <div className="container h-full flex items-center justify-end">
        <div className="row items-start md:items-center justify-end">
          <div className="col-md-5 text-center md:text-left pt-5 pt-md-0">
            <h1 className="mb-2 text-white">Finding Your Perfect Shoes</h1>
            <div className="intro-text text-center md:text-left">
              <p className="mb-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
              <p>
                <a href="#" className="btn btn-sm btn-primary text-white">
                  Shop Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
