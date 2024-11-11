import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          {/* <div className="container">
            <div className="row">
              <div className="footerform">
                <div className="formheading">
                  <h2>Subscribe Our Newsletter</h2>
                </div>
                <div className="inputfield">
                  <input
                    type="mail"
                    placeholder="Enter your mail"
                    className="forminner"
                    required
                  />

                  <button className="subscribe">
                    <h5>Subscribe Now</h5>
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="footerdata">
              <div className="col-md-4">
                <div className="leftdata">
                  <div className="websitename">
                    <Link to="/">
                      <h2>GK EARTH MOVER</h2>
                    </Link>
                    <p>
                      Reliable Construction Equipment Rentals Since 1930
                      Delivering Quality, Trust, and Excellence.
                    </p>
                  </div>
                  <div className="socialicon">
                    <h3>Follow Us</h3>
                    <div className="iconlink">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="innericon" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="innericon" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="innericon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="middle-data">
                  <div className="useful-links">
                    <h3>Useful Links</h3>
                    <ul>
                      <li className="footer-page-link">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/Aboutus">About</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/Equipmentspage">Equipments</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/Contactus">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="right-data">
                  <div className="contact-info">
                    <h3>Contact Us</h3>
                    <div className="contact-info-inner">
                      <div className="mail-info">
                        <IoMail className="icon" />
                        <a href="mailto:demotext456@gmail.com">
                          Demotext456@gmail.com
                        </a>
                      </div>
                      <div className="mail-info">
                        <FaPhoneAlt className="icon" />
                        <a href="tel:+919350619539">+91 9350619539 /</a>
                        <a href="tel:+919810174170">+91 9810174170</a>
                      </div>
                      <div className="mail-info">
                        <IoLocation className="icon" />
                        <a
                          href="https://www.google.com/maps/place/14,+Block+P,+Sector+8+Dwarka,+Raj+Nagar,+New+Delhi,+Delhi+110077/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          RZF-904/14, Raj Nagar Part-2 Palam Colony, New
                          Delhi-110077
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="footer-copyright">
              <p>
                All Right Reserved &#169; {new Date().getFullYear()}{" "}
                <Link to={`/`} className="Linkcss">
                  <b>GK EARTH MOVER.</b>
                </Link>{" "}
                Design by{" "}
                <Link
                  to={
                    "https://www.digiindiasolutions.com/?srsltid=AfmBOooMUTT8BKDo97j5M7mV3g5w8sXr8IGV7ovo1j24aNq5ZzOEzwyi"
                  }
                  className="Linkcss"
                >
                  <b>Digi India Solutions.</b>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
