import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import Swal from "sweetalert2";

const Contactus = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    data.access_key = "007fd149-ccb4-4fcb-a57a-0b627d71f057";
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const res = await response.json();
  
      if (res.success) {
        Swal.fire({
          title: "Good job!",
          text: "Inquiry sent successfully!",
          icon: "success",
        });
        reset(); // Clear form inputs after submission
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Network error. Please try again later.",
        icon: "error",
      });
    }
  };
  

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="hero">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="formhead">
              <h2>For Any Inquiry</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-form-section">
            {/* Contact Info Section */}
            <div className="row contact-info-page justify-content-center">
              <div className="col-md-3 info-box">
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
              <div className="col-md-3 info-box">
                <IoMail className="icon" />
                <p>
                  <a href="mailto:info@gmail.com">info@gmail.com</a>
                </p>
              </div>
              <div className="col-md-3 info-box">
                <FaPhoneAlt className="icon" />
                <p>
                  <a href="tel:+919350619539">+91 9350619539 </a>
                  <a href="tel:+919810174170">+91 9810174170 </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="row form-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    <span className="text-danger">
                      {errors.name && <p>{errors.name.message}</p>}
                    </span>
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <span className="text-danger">
                      {errors.email && <p>{errors.email.message}</p>}
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Phone number is required",
                        minLength: {
                          value: 10,
                          message: "Phone number must be 10 digits",
                        },
                        maxLength: {
                          value: 10,
                          message: "Phone number cannot exceed 10 digits",
                        },
                      })}
                    />
                    <span className="text-danger">
                      {errors.phone && <p>{errors.phone.message}</p>}
                    </span>
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Area, City"
                      {...register("location", { required: "Location is required" })}
                    />
                    <span className="text-danger">
                      {errors.location && <p>{errors.location.message}</p>}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  <span className="text-danger">
                    {errors.subject && <p>{errors.subject.message}</p>}
                  </span>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Comment"
                    {...register("comment", { required: "Comment is required" })}
                    rows="5"
                  ></textarea>
                  <span className="text-danger">
                    {errors.comment && <p>{errors.comment.message}</p>}
                  </span>
                </div>
                <div className="button-container">
                  <button type="submit" className="submit-btn">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid mb-3">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.531914363581!2d77.28017157528832!3d28.613816075675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35935fc6df5%3A0xf004190385af3321!2sAkshardham%20Mandir!5e0!3m2!1sen!2sin!4v1730999952164!5m2!1sen!2sin"
              width="1500"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
