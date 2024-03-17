import React from "react";
import BeautyHero from "./BeautyHero";
import VideoCarouselDoctors from "./VideoCarouselDoctors";
import VideoCarouselClient from "./VideoCarouselClient";

const Beauty = () => {
  return (
    <div className="pt-10">
      <BeautyHero />
      <VideoCarouselDoctors />
      <VideoCarouselClient />
    </div>
  );
};

export default Beauty;
