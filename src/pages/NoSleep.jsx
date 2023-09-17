import React from 'react'
import NoSleepCover from '../assets/nosleepcover.PNG'
import NavBar2 from './NavBar2';
import Girl from '../assets/girl.PNG'
import Flasa from '../assets/bottle.PNG'
import Festival from '../assets/festival.PNG'

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

const NoSleep = () => {
  return (
    <div className='w-full h-auto bg-gray-800 text-gray-400 overflow-hidden'>
    <NavBar2 />

    <div className='flex justify-center items-center w-full'>
    <img src={NoSleepCover} className='w-full h-[400px] object-cover' alt='Pricture'/>
    </div>

    <div className='w-full h-auto flex flex-col justify-center items-center'>
    <div className='max-w-[500px] px-7 h-auto'>
    <h1 className='text-8xl font-digital font-extrabold pt-7'>NO SLEEP FESTIVAL 2019</h1>
    </div>

    <div className='max-w-[500px] min-w-[400px] h-auto py-4 text-lime-500 flex justify-between items-center'>
    <h1>Nov 2019.</h1>
    <h1>SHARE: Facebook Twitter</h1>
    </div>
    
    <div className='max-w-[500px] h-auto py-5 flex flex-col px-7'>
    <h1 className='py-10'>This year, the second edition of No Sleep Festival, exceeded the expectations of the organizers. Fans of electronic music from more than 40 countries gathered in Belgrade on a frantic weekend from November 8th to November 10th to see the shows of some of the most sought-after and significant names of the electronic scene in ten locations across the city. The Main Hangar at the Port of Belgrade, welcoming the greatest stars Amelie Lens, Bicep, Kobosil, the most visited and by far the largest festival location, was completely sold out on the first night and compared to last year, clubs in the capital city, such as Dragstor, 20/44, Half, Mladost, Gadost, Gajba, Dot, etc. were visited by even more people as well.</h1>
    <h1 className='pb-5'>The synergy of No Sleep awakened by the Guarana Beverages and the No Sleep Festival was not omitted this year either. No Sleep was there to provide extra energy to visitors so that they could enjoy the festival until the morning. The promotional team rewarded the most loyal fans with great gifts.</h1>
    </div>

 <Carousel responsive={responsive} className='w-full md:h-[600px] h-auto'>
 <img src={Festival} alt="Image 3"  className='w-full h-auto p-10'/>
 <img src={Flasa} alt="Image 2" className='w-full h-auto p-10'/>
 </Carousel>



    </div>
    <div className='w-full h-auto py-3 bg-gray-800'>
        <h1 className=' text-black moving-text font-extrabold'>#GUARANANOSLEEP</h1>
      </div>

    </div>
  )
}

export default NoSleep
