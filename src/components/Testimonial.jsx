import React, { useState } from "react";
import TestimonialCard from "../layouts/TestimonialCard";
import Image from "react-bootstrap/Image";
import Separator from "./Seperator";
import Button from "../layouts/Button";
import Gallery from "../layouts/Gallery";
import Newsletter from "./Newsletter";

const img =
  "https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const testimonialData = [
  {
    name: "Jessika",
    img: "https://images.pexels.com/photos/14200022/pexels-photo-14200022.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I had filler applied in the cheek and I loved it. I loved the change and especially that it was not noticeable and that it bring back some volumes to my face.",
    country: "Nepal",
    age: 35,
  },
  {
    name: "Emma",
    img: "https://images.pexels.com/photos/14683433/pexels-photo-14683433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I had filler applied in the cheek and I loved it. I loved the change and especially that it was not noticeable and that it bring back some volumes to my face.",
    country: "USA",
    age: 36,
  },
  {
    name: "Kwan",
    img: "https://images.pexels.com/photos/20339254/pexels-photo-20339254/free-photo-of-portrait-of-woman-wearing-blue-dress-by-the-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I had filler applied in the cheek and I loved it. I loved the change and especially that it was not noticeable and that it bring back some volumes to my face.",
    country: "France",
    age: 45,
  },
  {
    name: "Ozan",
    img: "https://images.pexels.com/photos/20359979/pexels-photo-20359979/free-photo-of-a-woman-with-curly-hair-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I had filler applied in the cheek and I loved it. I loved the change and especially that it was not noticeable and that it bring back some volumes to my face.",
    country: "Turkey",
    age: 24,
  },
  {
    name: "Julia",
    img: "https://images.pexels.com/photos/20359979/pexels-photo-20359979/free-photo-of-a-woman-with-curly-hair-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I had filler applied in the cheek and I loved it. I loved the change and especially that it was not noticeable and that it bring back some volumes to my face.",
    country: "Italy",
    age: 26,
  },
  {
    name: "Nela",
    img: "https://images.pexels.com/photos/20359979/pexels-photo-20359979/free-photo-of-a-woman-with-curly-hair-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I had filler applied in the cheek and I loved it. I loved the change and especially that it was not noticeable and that it bring back some volumes to my face.",
    country: "Albania",
    age: 28,
  },
  {
    name: "Nela",
    img: "https://images.pexels.com/photos/20359979/pexels-photo-20359979/free-photo-of-a-woman-with-curly-hair-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I had filler applied in the cheek and I loved it. I loved the change and especially that it was not noticeable and that it bring back some volumes to my face.",
    country: "Albania",
    age: 28,
  },
  {
    name: "Nela",
    img: "https://images.pexels.com/photos/20359979/pexels-photo-20359979/free-photo-of-a-woman-with-curly-hair-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I had filler applied in the cheek and I loved it. I loved the change and especially that it was not noticeable and that it bring back some volumes to my face.",
    country: "Albania",
    age: 28,
  },
];

const Testimonial = () => {
  const initialVisibleCards = 6;
  const [visibleCards, setVisibleCards] = useState(
    testimonialData.slice(0, initialVisibleCards)
  );
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    const newVisibleCards = testimonialData.slice(0, visibleCards.length + 3);
    setVisibleCards(newVisibleCards);
    setShowMore(newVisibleCards.length < testimonialData.length);
  };

  const handleShowLess = () => {
    const newVisibleCards = testimonialData.slice(0, initialVisibleCards);
    setVisibleCards(newVisibleCards);
    setShowMore(true);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Image src={img} fluid className="py-19 px-2 mb-20" />
      <Separator heading="Our Testimonials" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 px-2 gap-4">
        {visibleCards.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {showMore ? (
        <div className="flex justify-center mt-4">
          <Button
            className="nav-btn bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={handleShowMore}
          >
            Show More
          </Button>
        </div>
      ) : (
        <div className="flex justify-center mt-4">
          <Button
            className="nav-btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={handleShowLess}
          >
            Show Less
          </Button>
        </div>
      )}
      <Gallery />
      <Newsletter className="m-0 p-2 !important" />
    </div>
  );
};
export default Testimonial;
