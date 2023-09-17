import React from 'react'
import SmallCans from './SmallCans'
import Guarana from './Guarana'
import ClassicGurana from './ClassicGuarana'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const GuaranaSlides = () => {
  return (
    <div className='overflow-hidden'>
    <Carousel responsive={responsive}>
        <SmallCans />
        <Guarana />
        <ClassicGurana />
        </Carousel>
    </div>
  )
}

export default GuaranaSlides

