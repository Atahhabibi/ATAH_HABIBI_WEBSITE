import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { BLOGS } from "../utils/projects";
import Blog from "./Blog";
import MainBlogView from "./MainBlog";
import Work from "./Work";

const AsNavFor = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  return (
    <div>
      <Slider asNavFor={nav2} ref={slider1Ref}>
        {BLOGS.map((item, index) => {
          return <MainBlogView key={index} {...item} />;
        })}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2Ref}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        autoplay={true}
        autoplaySpeed={3500}
      >
        {BLOGS.map((item, index) => {
          return <Blog key={index} {...item} />;
        })}
      </Slider>
    </div>
  );
};

export default AsNavFor;
