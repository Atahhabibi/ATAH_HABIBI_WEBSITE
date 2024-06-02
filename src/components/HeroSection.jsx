import { useEffect ,useState} from "react";
import styled from "styled-components";
import atah_1 from "../images/atah-2.jpg";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {


  return (
    <Wrapper id="HOME">
      <div className="home-center">
        <div className="image-container">
          <img src={atah_1} alt="atah-img" className="img person-img" />
        </div>

        <div className="info-container">
          <h4
            style={{
              paddingTop: "1rem",
              margin: "auto 0",
              fontWeight: "bold",
              color: "white",
              fontSize: "2rem",
            }}
            className="title"
          >
            Hi, I am {"  "}
            <br />
            <span style={{ color: "#72e2ae", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Atah Habibi",
                  "I am software engineer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h4>

          <p className="text">
             I can provide clean code and pixel
            perfect design. I also make website more and more interactive with
            web animations.
          </p>
          <ul className="social">
            <a
              className="btn btn-1"
              href="https://www.facebook.com/atah.rahman.12/"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="btn btn-1"
              href="https://www.instagram.com/atah__habibi?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="btn btn-1"
              href="https://github.com/Atahhabibi"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              className="btn btn-1"
              href="https://www.linkedin.com/in/atah-habibi-2bb8412/"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              className="btn btn-1"
              href="https://twitter.com/Atah_Ur_Rahman"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </ul>

        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: grid;
  place-items: center;


  .home-center{
    width:100vw;
    text-align: center;
    overflow: hidden;
    margin: 0 auto;
    display: grid;
    place-items: center;
  }


  .image-container {
    border-radius: 50%;
    overflow: hidden;
    height: 10rem;
    width: 10rem;
    border: 5px solid var(--primary-100);
    margin: 0 auto;
  }

  .scroll-btn {
    background: transparent;
    border: none;
    position: absolute;
    bottom: 4%;
    left: 50%;
    margin: 0 auto;

    animation: downAnimate 1s linear infinite;

    @keyframes downAnimate {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(30%);
      }

      100% {
        transform: translateY(0);
      }
    }
  }

  .info-container {
    color: white;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
    max-width: 30rem !important;

    .title {
      font-weight: 600;
      font-size:2.5rem !important;
      min-width:25rem !important;
    }


    .text {
      margin: 0 auto;
      margin-top: 1rem;
      font-size: 1rem;
      padding: 0 1rem;
    }
  }

  .social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 17rem;
    margin: 0 auto;
    margin-top: 2rem;

    a {
      color: rgba(210, 231, 207, 0.947);
      list-style-type: none;
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      padding: 1%;
      border: 1px solid rgba(201, 191, 191, 0.6);
      cursor: pointer;
      margin-left: 10px;
      margin-bottom: 20px;
      transition: ease 0.3s;
      font-size: 1.5rem;
      display: grid;
      place-items: center;
      background-color: #00000031;

      &:hover {
        color: #0b0601;
        background-color: var(--primary-100);
      }

      i{
        font-size:2.3rem;
      }
    }

    .social:hover > li {
      opacity: 0.5;
    }

    .social:hover > li:hover {
      opacity: 1;
    }
  }

  @media screen and (min-width: 600px) {
    .info-container {
      max-width: 50rem;
      .title {
        font-size: 2.5rem !important;
      }
    }
    br {
      display: none;
    }

    .text {
      max-width: 35rem !important;
    }

    .social {
      min-width: 30rem;
      li {
        width: 80px;
        height: 80px;
        font-size: 2rem;
      }

      a{
        width:70px;
        height:70px;
      }
    }
  }

  @media screen and (min-width: 800px) {

    .home-center{
      min-width:800px;
      text-align: center;

      .info-container{
        margin: 0 auto;
        min-width:800px;

        .title{
          font-size:3rem !important;
  
        }

        .text{
          margin: 0 auto;
          min-width:700px;
  
        }
      }
    }
    

    .info-container {
      .text {
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (min-width:1000px){

    .home-center{
      min-width:1100px;
      text-align: center;

      .info-container{
        margin: 0 auto;
        min-width:1100px;
        .title{
          font-size:4rem !important;

        }
        .text{
          margin: 0 auto;
          min-width:800px;
        }
      }
    }
    
  }
`;

export default HeroSection;
