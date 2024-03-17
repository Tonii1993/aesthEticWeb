import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import videoCarousel from "../../src/assets/videos/carouselvideo.mp4";
import imgCarousel1 from "../../src/assets/img/carouselphoto1.jpg";
import imgCarousel2 from "../../src/assets/img/carouselphoto2.jpg";
import "./CarouselPage.css";

const CarouselPage = () => {
  return (
    <div className="pt-12">
      <Carousel>
        <Carousel.Item>
          <video className="d-block w-100" controls autoPlay muted>
            <source src={videoCarousel} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={imgCarousel1}
            alt="First slide"
            className="d-block w-100"
          />

          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Some description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={imgCarousel2}
            alt="second slide"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Some description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
