import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "../layouts/VideoCard";
import video1 from "../../src/assets/videos/ambient-lake.mp4";
import video2 from "../../src/assets/videos/ambientnature-atmosphere.mp4";
import video3 from "../../src/assets/videos/blowing.mp4";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const items = [
  {
    id: 1,
    title: "Ben",
    videourl: video1,
  },
  {
    id: 2,
    title: "Ana",
    videourl: video2,
  },
  {
    id: 3,
    title: "Albana",
    videourl: video3,
  },
  {
    id: 4,
    title: "Eri",
    videourl: video2,
  },
  {
    id: 5,
    title: "Ori",
    videourl: video1,
  },
];

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black p-4 rounded-full focus:outline-none z-10"
  >
    <FaChevronRight size={20} />
  </div>
);

const PrevArrow = ({ onClick, currentSlide }) => {
  const isDisabled = currentSlide === 0;

  return (
    <div
      onClick={!isDisabled ? onClick : null}
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-black p-4 rounded-full focus:outline-none z-10 ${
        isDisabled ? "hidden" : "cursor-pointer"
      }`}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};

const VideoCarouselClient = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex justify-end">
      <div className="slider-container w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 mb-3 pr-2">
        <div className="flex flex-col m-3 mt-8">
          <h4 className="my-2 text-lg sm:text-xl lg:text-2xl">
            Series <strong className="text-red-500">What They Say</strong>
          </h4>
        </div>
        <Slider {...settings}>
          {items.map((item, id) => (
            <div key={id}>
              <VideoCard
                id={item.id}
                title={item.title}
                videourl={item.videourl}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoCarouselClient;
