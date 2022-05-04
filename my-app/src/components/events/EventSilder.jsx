import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventSilder = (props) => {
  const { images } = props;
  console.log("img", props);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {" "}
      {images.map((img, index) => (
        <Wrap key={index}>
          <img src={img} alt="" />
        </Wrap>
      ))}
    </Carousel>
  );
};

export default EventSilder;

const Carousel = styled(Slider)`
  max-width: 450px;
  border-radius: 10px;
  height: 300px;
  .slick-list {
    overflow: hidden;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  max-width: 450px;
  height: 300px;
  border-radius: 10px;
  img {
    /* border: 4px solid transparent; */
    border-radius: 10px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    /* &:hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
    } */
  }
`;
