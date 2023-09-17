import React, { useEffect } from 'react'
import ClassicCan from '../assets/original-can-new.png'
import BackGounrd from '../assets/103330.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'


const ClassicGuarana = () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
  })

  return (
    <div name={"Red"} className='w-full h-auto md:h-screen flex flex-col overflow-hidden'>
    
    <div className='flex w-full flex-grow md:flex-row flex-col-reverse md:justify-around justify-center items-center'>

  
    <div data-aos="fade-up" className='text-white w-[400px] h-full flex flex-col justify-center'>
    <h1 className='text-5xl font-extrabold md:text-outline italic shadowtext2'>GUARANA
    ORIGINALC
    </h1>
 
    <p className='text-sm text-white my-3'>SOME CALL IT THE ORIGINAL, BUT WE CALL IT GUA. IT HAS BEEN CALLED GREEN, PURE ENERGY, OWL OR SIMPLY GUARANA, BECAUSE EVERYONE KNOWS THE ORIGINAL GUARANA.</p>
    <button className='w-[170px] h-[60px] border-4 border-white font-semibold p-3 mt-10  md:mb-0'>FIND OUT MORE</button>
    </div>
 
       
    <div data-aos="fade-left" className='md:w-1/3 w-[300px] h-full pt-20 pb-10 md:pb-5 md:pt-5'>
        <img src={ClassicCan} className='object-cover w-full h-full canShake '/>
    </div>
 
    </div>
    <img src={BackGounrd} className='absolute -z-20 w-full h-full'/>
    </div>
  )
}

export default ClassicGuarana
