import React from "react";
import Slider from "react-slick";
import NewsCard from "../layouts/NewsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";

const items = [
  {
    id: 1,
    title: "DO’S AND DON’TS OF DERMAL FILLERS",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe, nobis reiciendis placeat, quaerat velit aliquid numquam veniam blanditiis exercitationem modi accusantium at hic vitae, laudantium quo aperiam ab earum minima? Veritatis, repellat. Quam rerum fuga nemo perferendis nam autem?",
    img: "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "WHAT TO EXPECT DURING A LIP FILLER PROCEDURE?",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus sit adipisci minima aut optio reiciendis tempore enim fugiat consequatur id ipsa qui excepturi quas necessitatibus consequuntur, sequi nam quam.",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "HOW TO GET GLOWY SKIN? A GUIDE FOR BEAUTIFUL RADIANT SKIN",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, magni tempore sunt quos reiciendis numquam alias aliquam maxime quod nostrum neque reprehenderit autem quibusdam esse consequuntur accusamus unde incidunt dolor temporibus quia vitae atque.",
    img: "https://images.pexels.com/photos/459971/pexels-photo-459971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "News 4",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, magni tempore sunt quos reiciendis numquam alias aliquam maxime quod nostrum neque reprehenderit autem quibusdam esse consequuntur accusamus unde incidunt dolor temporibus quia vitae atque.",
    img: "https://images.pexels.com/photos/9489935/pexels-photo-9489935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "News 5",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, magni tempore sunt quos reiciendis numquam alias aliquam maxime quod nostrum neque reprehenderit autem quibusdam esse consequuntur accusamus unde incidunt dolor temporibus quia vitae atque.",
    img: "https://images.pexels.com/photos/8667949/pexels-photo-8667949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-10"
  >
    <BsChevronDoubleLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
  >
    <BsChevronDoubleRight />
  </div>
);

const NewsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            className="p-2 flex flex-col justify-center items-center"
          >
            <NewsCard {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
