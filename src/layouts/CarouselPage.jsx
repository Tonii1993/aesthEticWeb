import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import videoCarousel from "../../src/assets/videos/carouselvideo.mp4";
import imgCarousel1 from "../../src/assets/img/carouselphoto1.jpg";
import imgCarousel2 from "../../src/assets/img/carouselphoto2.jpg";
import "./CarouselPage.css";

const CarouselPage = () => {
  return (
    <div>
      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <video className="d-block w-100 h-auto" controls autoPlay muted>
            <source src={videoCarousel} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100 h-auto"
            src={imgCarousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Some description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100 h-auto"
            src={imgCarousel2}
            alt="Third slide"
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
