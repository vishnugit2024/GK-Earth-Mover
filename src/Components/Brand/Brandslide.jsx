import React from "react";
import "./Brandslide.css";
import Brand1 from "../../Assets/sponsor1.png";
import Brand2 from "../../Assets/sponsor2.png";
import Brand3 from "../../Assets/sponsor3.png";
import Brand4 from "../../Assets/sponsor4.png";
import Brand5 from "../../Assets/sponsor5.png";

const Brandslide = () => {

    const logos = [Brand1, Brand2, Brand3, Brand4, Brand5];

  return (
    <>
      <div className="container-fluid mt-3 mb-3">
        <div className="row">
        <div className="logo-slider">
      <div className="slider-track">
        {[...logos, ...logos].map((logo, index) => ( // Duplicate the logos for seamless scrolling
          <div key={index} className="slide">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default Brandslide;
