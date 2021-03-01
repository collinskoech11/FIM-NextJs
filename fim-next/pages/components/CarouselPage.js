import React from "react";
import { MDBCarousel,  MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Image from 'next/image'



const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={7}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <Image
              className="d-block w-100"
              src='./img/Carousel1.jpeg'
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <Image
              className="d-block w-100"
              src='./img/carousel2.jpeg'
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <Image
              className="d-block w-100"
              src='./img/carousel3.jpeg'
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <Image
              className="d-block w-100"
              src='./img/poster.jpg'
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <Image
              className="d-block w-100"
              src='./img/poster1.jpg'
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <Image
              className="d-block w-100"
              src='./img/poster2.jpg'
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="7">
          <MDBView>
            <Image
              className="d-block w-100"
              src='./img/poster3.jpg'
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;