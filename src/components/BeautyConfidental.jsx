import React from "react";
import Separator from "./Seperator";
import Gallery from "../layouts/Gallery";
import Image from "react-bootstrap/Image";
import ResponsiveCard from "../layouts/ResponsiveCard";

const img =
  "https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const BeautyConfidental = () => {
  return (
    <>
      <Image src={img} fluid />
      <Separator
        heading="BEAUTY CONFIDENTIAL"
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      />
      <ResponsiveCard />
      <Gallery />
    </>
  );
};

export default BeautyConfidental;
