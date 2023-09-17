import React,{useEffect} from 'react';
import num1 from '../assets/num1.PNG';
import num2 from '../assets/num2.PNG';
import num3 from '../assets/num3.PNG';
import num4 from '../assets/num5.PNG';
import num5 from '../assets/num4.PNG';
import num6 from '../assets/num6.PNG';

import AOS from 'aos'
import 'aos/dist/aos.css'

const data = [
  {
    id: 1,
    picture: num1,
  },
  {
    id: 2,
    picture: num2,
  },
  {
    id: 3,
    picture: num3,
  },
  {
    id: 4,
    picture: num4,
  },
  {
    id: 5,
    picture: num5,
  },
  {
    id: 6,
    picture: num6,
  },
];

const GuaranaNews = () => {


  useEffect(()=>{
    AOS.init({duration: 500})
  })

  return (
    <div name={"News"} className='overflow-hidden'>
      <div className='w-full h-[130px] items-center justify-center flex bg-gray-800'>
        <h1 className='animate-flicker font-extrabold text-white md:text-9xl text-7xl py-10'>
          GUARANA
        </h1> <h1 className=' px-10 font-extrabold text-black md:text-9xl text-7xl  md:text-outline-news py-10'>
       NEWS
      </h1>  <h1 className='animate-flicker font-extrabold text-white md:text-9xl text-7xl py-10'>
      GUARANA
    </h1> <h1 className=' font-extrabold text-black md:text-9xl text-7xl  md:text-outline-news py-10'>
    NEWS
  </h1>
      </div>
      <div className='w-full h-[130px] items-center justify-center flex bg-gray-800'>
        <h1 className=' font-extrabold text-black md:text-9xl text-5xl  md:text-outline-news py-10'>
          NEWS
        </h1> <h1 className='animate-flicker px-10 font-extrabold md: text-lime-400 md:text-9xl text-7xl  py-10'>
       GUARNA
      </h1>  <h1 className=' font-extrabold text-white md:text-9xl text-7xl md:text-outline-news py-10'>
      NEWS
    </h1> <h1 className='animate-flicker px-10 font-extrabold md: text-lime-400 md:text-9xl text-7xl py-10'>
    GUARNA
  </h1>
      </div>
      <div className='w-full h-auto py-7 flex flex-wrap justify-center bg-gray-700'>
        
        {data.map(({ id, picture }) => (
          <div data-aos="zoom-in-up" key={id} className='w-[400px] h-[600px] border-2 border-yellow-300 m-2'>
            <img src={picture} className='object-cover w-full h-full' />
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default GuaranaNews;
