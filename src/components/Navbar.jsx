import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { tabs } from "../utils/tabs";
import atahLogo from "../images/atahhabibiLogo.png";
import { useAppContext } from "../context";

const Navbar = () => {
  const { openSidebar } = useAppContext();

  const [classType, setClassType] = useState("show-nav");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setClassType("hide-nav");
      } else {
        setClassType("show-nav");
      }
    } else {
      setClassType("nav-home");
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
     window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <Wrapper className={` ${classType}`}>
      <div className="main-nav section-center">
        <div className="nav-heading">
          <a href="#home" className="name">
           <h2 className="img logo-img">Atah Habibi</h2>
           {/* <img src={atahLogo} alt="" className="img logo-img" /> */}

          </a>

          <button className="toggle-btn btn btn-1" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <div className="links">
          {tabs.map((tab) => {
            return (
              <button key={tab.id} className="link">
                <a href={`#${tab.name}`}>
                  <span className="num">{tab.id}. </span>
                  {tab.name}
                </a>
              </button>
            );
          })}
        </div>

        <a className="btn btn-1 hire-btn" href="mailto:habibiatah@gmail.com">
          HIRE ME
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem 0;
  /* background-color: rgba(3, 40, 18, 0.9); */
  background:rgba(0, 0, 0, 0.9);
  position: sticky;
  border-bottom: 0.1px solid grey;
  top: 0;
  z-index: 222;
  /* backdrop-filter: blur(15px); */
  transition: transform 0.8s ease;

  .hide-nav {
    transform: translateY(-100%) !;
  }

  .name {
    font-size: 1.5rem;
    color: #13ad53;
    font-weight: 600;
    transition: var(--transition);

    .logo-img {
      width: 15rem;
      height: 3rem;
    }

    &:hover {
      color: white;
    }
  }

  .links {
    display: none;
  }

  .hire-btn {
    display: none;
  }

  .nav-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 500px) {
    backdrop-filter: blur(15px);
    background-color: rgba(3, 40, 18, 0.1);
  }

  @media screen and (min-width: 1000px) {
    .main-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .toggle-btn {
      display: none;
    }

    .hire-btn {
      display: block;
      font-weight: 400;
      padding: 0.6rem 1rem !important;
    }

    .links {
      display: flex;
      column-gap: 0.5rem;
      transition: all 1s ease-in;

      .link {
        background: transparent;
        border: none;
        flex: 1 1 auto;
        margin: 10px;
        text-align: center;
        text-transform: uppercase;
        position: relative;
        transition: 0.3s;

        &:after {
          position: absolute;
          transition: 0.3s;
          content: "";
          width: 0;
          left: 50%;
          bottom: -0.5rem;
          height: 1px;
          background: #13ad53;
        }

        &:hover {
          cursor: pointer;

          &:after {
            width: 100%;
            left: 0;
          }
        }
      }

      .link a {
        display: inline-block;
        color: white;
        font-size: 1.2rem;
        font-weight: 500;
      }

      .num {
        color: var(--primary-100);
        font-weight: 600;
      }
    }

    .hire-btn {
      padding: 0.3rem;
      font-size: 1rem;
    }
  }
`;

export default Navbar;
