import styled from "styled-components";

const MainTitle = ({ sectionTitle,mainTitle }) => {
  return (
    <Wrapper className="section-center">

      <div className="section-title">

        <h1 className="section-name">{sectionTitle || "section-title"}</h1>

        <div className="main-title">
          <h2>{mainTitle|| 'main-title' }</h2>
          <div className="underline"><span></span></div>
        </div>



      </div>
     
         
    </Wrapper>
  );
};

const Wrapper = styled.div`

.section-title{
  position: relative;
}

.section-name{
  text-align: center;
  font-size:5rem;
  color:var(--grey-800);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing:0rem;
}

.main-title{
  position: absolute;
  top:30%;
  left:50%;
  transform: translateX(-50%);
  
  h2{
    color: white;
    font-weight:400;
    text-transform: uppercase;
    font-size:2rem;
  }
}

  .underline {
      width: 8rem;
      height: 0.5rem;
      background: rgba(26, 153, 31, 0.3);
      display: inline-block;
      border-radius: 1rem;
      position:absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top:0.4rem;
    

     

      span {

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          animation: move 4s linear infinite;
          background:green;
        }

        @keyframes move {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          50.1% {
            transform: scaleX(1);
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }
      }
    }



@media screen and (min-width:600px) {


  .main-title {
    h2{
      font-size: 2.5rem;
      font-weight: 600;
    }
  }

  .section-name{
    font-size:8rem;
  
  }
    
}


  
`;

export default MainTitle;
