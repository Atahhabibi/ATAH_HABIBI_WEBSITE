import styled from "styled-components";
import { MainTitle } from ".";
import { projectsData } from "../utils/projects";
import Work from "./Work";
import { useRef, useState } from "react";

const WorksSection = () => {
  let projects = projectsData.map((item) => item.projects);
  projects = projects.flat();
  const [projectsIndex, setProjectsIndex] = useState(6);
  const [newProjects, setNewProjects] = useState(
    projects.slice(0, projectsIndex)
  );
  const [isLoad, setIsLoad] = useState(true);
  const [activeBtn, setActiveBtn] = useState("All");
  const loadRef = useRef(null);

  const handleWorks = (e) => {
    const value = e.target.dataset.value;

    setActiveBtn(value);

    if (value === "All") {
      loadRef.current.style.display = "block";
      setNewProjects(projects.slice(0, 6));
      setIsLoad(true);
    } else {
      let temp = projects.filter(
        (item) => item.program.toUpperCase() === value
      );
      loadRef.current.style.display = "none";
      setNewProjects(temp);
    }
  };

  const handleLoad = () => {
    setProjectsIndex((prev) => {
      let newIndex = prev + 3;
      if (newIndex >= projects.length) {
        setIsLoad(false);
        newIndex = projects.length;
        const worksSecion = document.getElementById("WORKS");

        if (worksSecion) {
          if (!isLoad) {
            worksSecion.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
      setNewProjects(projects.slice(0, newIndex));
      return newIndex;
    });

    if (!isLoad) {
      setNewProjects(projects.slice(0, 6));
      setProjectsIndex(6);
      setIsLoad(true);
    }
  };

  return (
    <Wrapper id="WORKS">
      <div className="section-center">
        <MainTitle mainTitle="My works" sectionTitle="Works" />

        <div className="work-btn-container">
          <button
            className="work-btn"
            data-value="All"
            onClick={handleWorks}
            style={{ background: `${activeBtn === "All" ? " green " : ""}` }}
          >
            All
          </button>
          <button
            className="work-btn"
            data-value="REACT"
            onClick={handleWorks}
            style={{ background: `${activeBtn === "REACT" ? " green " : ""}` }}
          >
            REACT
          </button>
          <button
            className="work-btn"
            data-value="HTML/CSS"
            onClick={handleWorks}
            style={{
              background: `${activeBtn === "HTML/CSS" ? " green " : ""}`,
            }}
          >
            HTML/CSS
          </button>
          <button
            className="work-btn"
            data-value="JAVASCRIPT"
            onClick={handleWorks}
            style={{
              background: `${activeBtn === "JAVASCRIPT" ? " green " : ""}`,
            }}
          >
            JAVASCRIPT
          </button>
        </div>

        <div
          className="works-container"
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
        >
          {newProjects.map((item, index) => {
            return <Work key={index} {...item} />;
          })}
        </div>
        {isLoad ? (
          <button
            className="btn btn-2 load-btn"
            onClick={handleLoad}
            ref={loadRef}
          >
            load more
          </button>
        ) : (
          <button
            className="btn btn-2 load-btn"
            onClick={handleLoad}
            ref={loadRef}
          >
            show less
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;
  background: #06022c33;
  position: relative;

  .work-btn-container {
    text-align: center;
    transition: all 1s cubic-bezier(0.86, 0, 0.07, 1);
    .work-btn {
      font-weight: 600;
      border: 3px solid #000000bd;
      background: #8c3c3c;
      color: white;
      font-size: 0.8rem;
    }
  }

  .works-container {
    display: grid;
    justify-items: center;
    gap: 1.3rem;
    margin-top: 2rem;
  }

  .load-btn {
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: normal;
    font-size: 0.8rem;
    /* background:var(--primary-100); */
  }

  @media screen and (min-width: 700px) {
    min-height: 100vh;

    .work-btn-container {
      .work-btn {
        font-size: 1rem;
      }
    }

    .load-btn {
      font-size: 1rem;
    }

    .works-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 1100px) {
    .works-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default WorksSection;
