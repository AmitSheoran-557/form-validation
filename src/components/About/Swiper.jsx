import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Img1 from "../../assets/image/webp/SwiperImg.png";
import HeadingTwo from "../common/HeadingTwo";
import SubHeading from "../common/SubHeading";

const SliderTwo_Card = [
  {
    headingTwo: "Lorem ipsum dolor",
    paraTwo: "Lorem ipsum dolor",
    backgroundImage: Img1,
  },
  {
    headingTwo: "Lorem ipsum dolor",
    paraTwo: "Lorem ipsum dolor",
    backgroundImage: Img1,
  },
  {
    headingTwo: "Lorem ipsum dolor",
    paraTwo: "Lorem ipsum dolor",
    backgroundImage: Img1,
  },
  {
    headingTwo: "Lorem ipsum dolor",
    paraTwo: "Lorem ipsum dolor",
    backgroundImage: Img1,
  },
  {
    headingTwo: "Lorem ipsum dolor",
    paraTwo: "Lorem ipsum dolor",
    backgroundImage: Img1,
  },
];
const CardSwiper = () => {
  return (
    <div className="container max-w-[1140px] mx-auto py-8">
      <HeadingTwo TittleOne={'Lorem ipsum dolor sit amet'} />
      <p className="font-medium lg:text-base text-sm text-black text-center opacity-[70%] leading-4 lg:mt-5 mt-3 lg:mb-[45px] mb-7">Lorem ipsum dolor sit amet consectetur. Amet varius in enim.</p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        slidesPerView={4}
        spaceBetween={0}
        breakpoints={{
          1440: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {SliderTwo_Card.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="w-[267px] h-[267px] border rounded-[16px] p-4 shadow-md bg-transparent flex flex-col justify-end items-center mx-auto bg-cover" style={{ backgroundImage: `url(${card.backgroundImage})` }}>
              <div className="w-full  backdrop:blur-xl">
                {/* <h2 className="text-xl font-semibold text-center">
                  {card.headingTwo}
                </h2>
                <p className="text-gray-600 text-sm text-center">{card.paraTwo}</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
