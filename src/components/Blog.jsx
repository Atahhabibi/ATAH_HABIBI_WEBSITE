import styled from "styled-components";

const Blog = ({name,liveLink,img,program,date}) => {
  return (
    <Wrapper>
      <a className="blog-img-container" href={liveLink} target="_blank">
        <h5 className="date">
          {date}
        </h5>
        <img
          src={img}
          alt={name}
          className="img blog-img"
        />
      </a>

      <div className="info-blog-container">
        <div className="info-title">
          <h4>{name}</h4>
          <p>{program}</p>
        </div>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background:black;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;

  


  display: grid;
  grid-template-rows:1fr auto;

  .blog-img {
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;
    background:black;
    cursor: pointer;
    transition:transform 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover{
     transform: scale(1.3);
    }
  }

  .info-title {
      text-align: center;
      letter-spacing:3px;
      margin: 0 auto;
      h4 {
        font-size: 1.7rem;
      }
      font-size: 1.2rem;
    }

  .blog-img-container {
    position: relative;
    overflow: hidden;
    display: block;
  }

  .date {
    position: absolute;
    top: 5%;
    right: 5%;
    background: var(--primary-100);
    color: black;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-weight: 600;
    z-index: 22;
  }

  .info-blog-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;


  }

  @media screen and (min-width: 720px) {
    margin-bottom: 2;
    pointer-events: none;
    max-height:300px;


    .blog-img{
      transition: none;
      max-height:200px;
     
      &:hover{
        transform: none;
      }
    }
  }

  @media screen and (min-width: 700px) {
 

 
  }
`;

export default Blog;
