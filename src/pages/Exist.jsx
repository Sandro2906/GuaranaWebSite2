import React from 'react'
import ExitImg from '../assets/exit.PNG'
import NavBar2 from './NavBar2';
import Pic1 from '../assets/gallery_111_Untitled-1_en_1580921202.png'
import Pic2 from '../assets/gallery_111_Untitled-4_en_1580921202.png'
import Pic3 from '../assets/gallery_111_Untitled-9_en_1580921202.png'
import Pic4 from '../assets/gallery_111_Untitled-11_en_1580921202.png'
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

const Exit = () => {
  return (
    <div className='w-full h-auto bg-gray-800 text-gray-400 overflow-hidden'>
    <NavBar2 />

    <div className='flex justify-center items-center w-full'>
    <img src={ExitImg} className='w-full h-[400px] object-cover' alt='Pricture'/>
    </div>

    <div className='w-full h-auto flex flex-col justify-center items-center'>
    <div className='max-w-[500px] h-auto'>
    <h1 className='text-8xl font-digital font-extrabold pt-7'>EXIT FESTIVAL 2019</h1>
    </div>

    <div className='max-w-[500px] min-w-[400px] h-auto py-4 text-lime-500 flex justify-between items-center'>
    <h1>Jun 2019.</h1>
    <h1>SHARE: Facebook Twitter</h1>
    </div>
    
    <div className='max-w-[500px] h-auto py-5 flex flex-col md:p-0 p-3'>
    <h1 className='py-10'>The 19th EXIT festival was held at the well-known site of Petrovaradin Fortress, being visited by the record number of 200,000 visitors in four nights. With the historical edition of the festival, EXIT successfully completed the first of three very important years in a row for Novi Sad. During the 2019 campaign, the festival strongly promoted this year's title of Youth Capital of Europe, being a prelude to the 202nd year anniversary, when EXIT Festival will celebrate its 20th anniversary, whereby the edition of 2021 will be dedicated to the title of European Capital of Culture.
    With an interesting line up at the EXIT, Guarana once again prepared the brand activation and a zone which enabled visitors at the festival to have even more fun.</h1>
    <h1 className='pb-5'>In the Guarana Invaders Zone, everyone could compete, but also have fun playing the arcade game in the well-known Owl style. Teams competed with each other, and the best among them received exciting gifts to remember their favorite brand at their favorite festival.
    In addition to the main activation in the Guarana Zone, promotional teams distributed Guarana on the way to the fortress together with interesting gifts to loyal consumers on the city beach Strand.</h1>
    </div>
    </div>


<Carousel responsive={responsive}  className=''>
    <img src={Pic1} alt='Picture' className='w-full h-auto p-10'/>
    <img src={Pic2} alt='Picture' className='w-full h-auto p-10'/>
    <img src={Pic3} alt='Picture' className='w-full h-auto p-10'/>
    <img src={Pic4} alt='Picture' className='w-full h-auto p-10'/>
</Carousel>

    



        <div className='w-full h-auto py-3 bg-gray-800'>
          <h1 className=' text-black moving-text font-extrabold'>#GUARANANOSLEEP</h1>
        </div>
    </div>
  )
}

export default Exit