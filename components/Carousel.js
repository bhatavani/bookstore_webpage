import React from 'react';
import { Carousel } from 'react-bootstrap';
import anime from '../images/anime.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.png';
import fiction from '../images/fiction.jpg';
const BookCarousel = () => (
  <Carousel>
     <Carousel.Item>
      <img className="d-block w-100" src={fiction} alt="nonfiction" />
      <Carousel.Caption>
        <h3>Non fiction genres</h3>
        <p>Discover all kinds of non fictional books for best price</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={anime} alt="anime" />
      <Carousel.Caption>
        <h3>Bestsellers</h3>
        <p>Animation and comic books</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img1} alt="sale" />
      <Carousel.Caption>
        <h3>Sale! Sale!</h3>
        <p>Grab the opportunity..Hurry now!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img2} alt="offer" />
      <Carousel.Caption>
        <h3>Special offers</h3>
        <p>Books @75!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default BookCarousel;
