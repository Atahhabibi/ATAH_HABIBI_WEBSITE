import styled from "styled-components";
import { MainTitle } from ".";
import "./Contact.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xrgvdnoq");
  const [text, setText] = useState("Email successfully sent!");
  const [isSend, setIsSend] = useState(false);

  if (state.succeeded) {
    toast.success("Email successfully sent!", {
      position: "top-center",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  }

  const handleSendRequest = () => {
    setIsSend(true);

    setTimeout(() => {
      setIsSend(false);
    }, 8000);
  };

  return (
    <Wrapper id="CONTACT">
      <div className="section-center">
        <MainTitle mainTitle="CONTACT" sectionTitle="contact" />

        <div className="contact_us_green">
          <div className="responsive-container-block big-container form-contact-container">
            <div className="responsive-container-block container ">
              <div
                className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line  contact-container "
                id="i69b-2"
              >
                <form onSubmit={handleSubmit}>
                  <div className="container-block form-wrapper">
                    <div className="head-text-box">
                      <p className="text-blk contactus-head">Contact Me</p>
                      <p className="text-blk contactus-subhead small-screen-text">
                        You are most welcome to contact me , if you have any
                        question, I will really appreciate for your time .
                      </p>
                    </div>
                    <div className="responsive-container-block">
                      <div
                        className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                        id="i10mt-6"
                      >
                        <p className="text-blk input-title">FIRST NAME</p>
                        <input
                          className="input"
                          id="ijowk-6"
                          name="FirstName"
                          type="text"
                        />

                        <ValidationError
                          prefix="First Name"
                          field="firstName"
                          errors={state.errors}
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">LAST NAME</p>
                        <input
                          className="input"
                          id="indfi-4"
                          name="Last Name"
                          type="text"
                        />
                        <ValidationError
                          prefix="LastName"
                          field="lastName"
                          errors={state.errors}
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">EMAIL</p>
                        <input
                          className="input"
                          id="ipmgh-6"
                          name="Email"
                          type="email"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">SUBJECT</p>
                        <input
                          className="input"
                          id="imgis-5"
                          name="SUBJECT"
                          type="text"
                        />
                        <ValidationError
                          prefix="Subject"
                          field="subject"
                          errors={state.errors}
                        />
                      </div>
                      <div
                        className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                        id="i634i-6"
                      >
                        <p className="text-blk input-title">
                          WRITE MESSAGE HERE
                        </p>
                        <textarea
                          className="textinput"
                          id="i5vyy-6"
                          placeholder="Please enter Message..."
                          name="Message"
                        ></textarea>

                        <ValidationError
                          prefix="Body"
                          field="message"
                          errors={state.errors}
                        />
                      </div>
                      {isSend && <h4 className="email-sent">{text}</h4>}
                    </div>

                    <div className="btn-wrapper">
                      <button
                        className="submit-btn"
                        type="submit"
                        onClick={handleSendRequest}
                      >
                        Send Mail
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div
                className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
                id="ifgi"
              >
                <div className="container-box">
                  <div className="text-content">
                    <p className="text-blk contactus-head">Contact Me</p>
                    <p className="text-blk contactus-subhead">
                      You are most welcome to contact me , if you have any
                      question, I will really appreciate for your time .
                    </p>
                  </div>
                  <div className="workik-contact-bigbox">
                    <div className="workik-contact-box">
                      <div className="phone text-box">
                        <img
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                        />
                        <p className="contact-text">+1 619 530 4555</p>
                      </div>
                      <div className="address text-box">
                        <img
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                        />
                        <p className="contact-text">habibiatah@gmail.com</p>
                      </div>
                      <div className="mail text-box">
                        <img
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
                        />
                        <p className="contact-text">California</p>
                      </div>
                    </div>

                    <div className="social-media-links">
                      <a href="mailto:habibiatah@gmail.com">
                        <img
                          className="social-svg"
                          id="is9ym"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/atah-ur-rahman-2bb841242/"
                        target="_blank"
                      >
                        <img
                          className="social-svg"
                          id="i706n"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/official_atah/"
                        target="_blank"
                      >
                        <img
                          className="social-svg"
                          id="ib9ve"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/atah.rahman.12/"
                        target="_blank"
                      >
                        <img
                          className="social-svg"
                          id="ie9fx"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
  background: #06022c33;
  position: relative;
  display: grid;
  place-items: center;

  .email-sent {
    margin: 0 auto;
    width: 80%;
    background: rgba(117, 227, 162, 0.2);
    margin-top: 0.5rem;
    text-align: center;
  }

  .head-text-box {
    text-align: center !important;
  }

  .small-screen-text {
    min-width: 310px !important;
  }

  .social-media-links {
    display: none;
  }

  @media screen and (min-width: 700px) {
    .contact-container {
      padding: 0 !important;
      padding-bottom: 4rem !important;

      .small-screen-text {
        min-width: 678px !important;
        text-align: center !important;
      }

      form {
        margin: 0 auto !important;
        text-align: center !important;
        padding: 0 1rem;
      }
    }
  }
`;

export default ContactSection;
