import styled from "styled-components";
import { useState } from "react";
import "./Footer.css";
import atah_logo from "../images/atah-realLogo.png";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            ATAH<span>HABIBI</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              HOME
            </a>

            <a href="#ABOUT">ABOUT</a>

            <a href="#WORKS">WORKS</a>

            <a href="#BLOGS">BOLGS</a>

            <a href="#CONTACT">CONTACT</a>
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span></span> California
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1 619 530 4555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:habibiatah@gmail.com">habibiatah@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>CONNECT WITH ME</span>
            You are most welcome to contact me , if you have any question, I
            will really appreciate for your time .
          </p>

          <div className="footer-icons">
            <a href="https://www.facebook.com/atah.rahman.12/" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/Atah_Ur_Rahman" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/atah-habibi-2bb841242/"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Atahhabibi" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 6rem;
  border-top: 1px solid #997d7d;

  .footer-icons {
    a {
      background: lightgreen;
    }
  }
`;

export default Footer;
