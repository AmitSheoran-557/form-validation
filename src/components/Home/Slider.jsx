import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PeopleIcon } from "../common/Icons";
import { Slider_cards } from "../common/Healper";
import HeadingTwo from "../common/HeadingTwo";
import PrevArrowImg from "../../assets/image/webp/slider-prev-arrow.png";
import NextArrowImg from "../../assets/image/webp/slider-next-arrow.png";

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
  <img
    src={PrevArrowImg}
    alt="Previous"
    className="absolute left-[48%] -bottom-[20%] z-10 w-[21px] hover:w-[30px] duration-300 ease-linear cursor-pointer"
    onClick={onClick}
  />
);

const NextArrow = ({ onClick }) => (
  <img
    src={NextArrowImg}
    alt="Next"
    className="absolute left-[53%] -bottom-[20%] z-10 w-[21px] hover:w-[30px] duration-300 ease-linear cursor-pointer"
    onClick={onClick}
  />
);

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,  
    nextArrow: <NextArrow />,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center py-32">
      <div className="slider-container max-w-[1140px] px-3 mx-auto relative">
        <HeadingTwo TittleOne={"Lorem ipsum"} />
        <Slider className="mt-10" {...settings}>
          {Slider_cards.map((data, i) => (
            <div
              key={i}
              className="max-w-[365px] py-5 px-[30px] rounded-3xl bg-[#FFF3ED]" >
              <PeopleIcon />
              <h2 className="lg:mt-8 mt-5 font-semibold xl:text-2xl lg:text-xl text-sm lg:mb-4 mb-3">
                {data.heading}
              </h2>
              <h2 className="font-light lg:text-base text-xs">
                {data.para}{" "}
                <span className="text-[#FF5501] font-semibold">
                  {data.readBtn}
                </span>
              </h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MultipleItems;
