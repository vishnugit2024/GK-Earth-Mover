import React, { useEffect } from "react";
import "./Aboutus.css";
import jobmachine from "../../Assets/jobmachine.png";
import jobman from "../../Assets/jobman.png";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Section2 from "../../Components/Homesection1/Section2";
import Section1 from "../../Components/Homesection1/Section1";
import Boost from "../../Components/Boost/Boost";
import Countsection from "../../Components/CountSection/Countsection";
import testimonial from "../../Assets/testimonial.png";
import Brandslide from "../../Components/Brand/Brandslide";

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const teamMembers = [
    {
      name: "John Engineer",
      role: "Product manager",
      image: testimonial,
    },
    {
      name: "Jane Designer",
      role: "UI/UX Specialist",
      image: testimonial,
    },
    {
      name: "Mike Developer",
      role: "Frontend Developer",
      image: testimonial,
    },
    {
      name: "Sara Architect",
      role: "Project Manager",
      image: testimonial,
    },
  ];

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="hero">
              <h1>ABOUT US</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container seprate1">
          <div className="row reverceColumn">
            <div className="col-md-6">
              <div className="aboutinfo">
                <div className="abouttitle">
                  <h4>ABOUT US</h4>
                  <h1>
                    Get the Job Done <span>Right </span>
                    with our Equipment
                  </h1>
                  <p>
                    Equip your project for success with our top-quality,
                    reliable machinery. Our well-maintained rentals ensure
                    efficiency, safety, and ease, helping you tackle every task
                    with confidence. Get the job done right with equipment you
                    can trust.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="about-list">
                      <li className="list-item" >
                        <RiArrowRightDoubleLine className="rightarrow" />{" "}
                        <b>High-performance machinery for all project sizes</b>
                      </li>
                      <li className="list-item" >
                        <RiArrowRightDoubleLine className="rightarrow" />{" "}
                        <b>Well-maintained and regularly inspected equipment</b>
                      </li>
                      <li className="list-item" >
                        <RiArrowRightDoubleLine className="rightarrow" />{" "}
                        <b>
                          Reliable tools to boost productivity and efficiency
                        </b>
                      </li>
                      <li className="list-item" >
                        <RiArrowRightDoubleLine className="rightarrow" />{" "}
                        <b>Flexible rental terms to fit your timeline</b>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="about-list">
                      <li className="list-item">
                        <RiArrowRightDoubleLine className="rightarrow" />{" "}
                        <b>Safety-focused standards for peace of mind</b>
                      </li>
                      <li className="list-item" >
                        <RiArrowRightDoubleLine className="rightarrow" />{" "}
                        <b>On-time delivery and easy pickup options</b>
                      </li>
                      <li className="list-item"  >
                        <RiArrowRightDoubleLine className="rightarrow" />{" "}
                        <b>Expert support available whenever you need it</b>
                      </li>
                      <li className="list-item"  >
                        <RiArrowRightDoubleLine className="rightarrow" />{" "}
                        <b>Trusted by professionals across the industry</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-container">
                <img className="background-image" src={jobman} />
                <img className="foreground-image" src={jobmachine} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Section2 />
      </section>

      <section>
        <Section1 />
      </section>

      <section>
        <Boost />
      </section>

      <section>
        <Countsection />
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="Team-heading">
              <h4>OUR TEAM</h4>
              <h1>
                Meet <span>Our</span> Expert
              </h1>
            </div>

            {teamMembers.map((member, index) => (
              <div className="col-md-3 mt-2" key={index}>
                <div className="card1">
                  <div className="image-box">
                    <img src={member.image} alt="Memberimg" />
                  </div>
                  <div className="content">
                    <h2>{member.name}</h2>
                    <h6>{member.role}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <Brandslide />
      </section>
    </>
  );
};

export default Aboutus;
