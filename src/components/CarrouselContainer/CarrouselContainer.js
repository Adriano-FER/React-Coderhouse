import "./Carrousel.css";
import Carousel from "react-bootstrap/Carousel";

export default function Carrousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="./Extras/navbar1.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Gaming has never been easier</h3>
            <p>You are only one step away from your PC</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="./Extras/navbar2.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Sit and relax</h3>
            <p>We have the best prices in market</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="./Extras/navbar3.jpg"
            alt="Image Three"
          />
          <Carousel.Caption>
            <h3>Worry about having fun</h3>
            <p>We worry about everything else</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
