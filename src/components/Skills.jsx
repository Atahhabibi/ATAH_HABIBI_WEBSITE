import styled from "styled-components";
import { MainTitle } from ".";
import { languages } from "../utils/prommingIcons";
import "./Skills.css";

const Skills = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <MainTitle mainTitle="My skills" sectionTitle="skills" />

        <div className="skills-container">
          {languages.map((item) => {
            return (
              <div className="box-outer" key={item.id}>
                <div className="main_box">
                  <div className="bar top"></div>
                  <div className="bar right delay"></div>
                  <div className="bar bottom delay"></div>
                  <div className="bar left"></div>
                  <img
                    src={item.icon}
                    alt=""
                    style={{ width: "5rem" }}
                    className="skill-img"
                  />
                  <h3 className="item-name">{item.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 0;
  background: #0000004c;
  position: relative;

  .skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
    justify-items: center;
    margin-bottom: 2rem;

    h3 {
      display: none;
    }
  }

  /* .language-img {
    width: 5rem;
    margin: 0 auto;
  } */

  .skill-img {
    width: 3rem !important;
  }

  @media screen and (min-width: 600px) {
    .skill-img {
      width: 5rem !important;
    }

    .skills-container {
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 0;

      h3 {
        display: block;
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 700px) {
    .skills-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      margin-top: 0;
    }
  }

  @media screen and (min-width: 900px) {
    .skills-container {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;

export default Skills;
