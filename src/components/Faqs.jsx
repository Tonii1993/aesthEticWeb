import React from "react";
import Image from "react-bootstrap/Image";
import Separator from "./Seperator";
import FaqsSection from "./FaqsSection";

const img =
  "https://images.pexels.com/photos/9065326/pexels-photo-9065326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Faqs = () => {
  return (
    <>
      <Image className="pt-12 px-5" src={img} fluid />
      <Separator heading="AESTHETIC MEDICINE AND TREATMENTS FAQ" />
      <FaqsSection />
    </>
  );
};

export default Faqs;
