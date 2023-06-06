import React from 'react'
import {Carousel} from "react-bootstrap"

const CarouselBS = ({slide1, slide2, slide3}) => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>{slide1}</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>{slide2}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://demos.creative-tim.com/material-kit/assets-old/img/bg2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>{slide3}</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselBS
