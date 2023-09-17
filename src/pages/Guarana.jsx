import React, { useEffect } from 'react'
import RedCan from '../assets/Gua_Afrofizijak_limenka.png'
import BackGounrd from '../assets/pngtree-paint-spray-powder-brush-background-image_713539.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Guarana = () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
  })

  return (
    <div name={"Red"} className='w-full h-auto md:h-screen flex flex-col overflow-hidden'>
    
    <div className='flex w-full flex-grow md:flex-row flex-col-reverse md:justify-around justify-center items-center'>

  
    <div data-aos="fade-up" className='text-white w-[400px] h-full px-10 md:px-0 flex flex-col justify-center'>
    <h1 className='text-5xl md:text-8xl font-extrabold md:text-outline italic shadowtext2'>GUARANA
    APHRODISIAC
    </h1>
 
    <p className='text-sm text-white my-3'>IN FEBRUARY, 2016, DURING THE SEASON OF LOVE, APHRODISIAC JOINED THE GUARANA FAMILY. THIS IS SEXY GUARANA WITH PASSION FRUIT TASTE AND MACA EXTRACT.!</p>
    <button className='w-[170px] h-[60px] border-4 border-white font-semibold p-3 mt-10  md:mb-0'>FIND OUT MORE</button>
    </div>
 
       
    <div data-aos="fade-left" className='md:w-1/3 w-[300px] h-full pt-20 pb-10 md:pb-5 md:pt-5'>
        <img src={RedCan} className='object-cover w-full h-full canShake '/>
    </div>
 
    </div>
    <img src={BackGounrd} className='absolute -z-20 w-full h-full'/>
    </div>
  )
}

export default Guarana
