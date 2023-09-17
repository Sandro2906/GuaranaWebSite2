import React, { useEffect } from 'react'
import RedCan from '../assets/Gua_Afrofizijak_limenka.png'
import BackGounrd from '../assets/pngtree-paint-spray-powder-brush-background-image_713539.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Guarana= () => {

  useEffect(()=>{
    AOS.init({duration: 1500})
  })


  return (
    <div name={"Red"} className='w-full h-screen flex flex-col overflow-hidden'>
    
    <div className='flex w-full flex-grow justify-around'>

    <div data-aos="fade-up" className='text-white w-[400px] h-full flex flex-col justify-center'>
    <h1 className='md:text-8xl text-5xl font-extrabold md:text-outline-red italic shadowtext2'>GUARANA
    APHRODISIAC
    </h1>
    <p className='text-sm text-white my-3'>IN FEBRUARY, 2016, DURING THE SEASON OF LOVE, APHRODISIAC JOINED THE GUARANA FAMILY. THIS IS SEXY GUARANA WITH PASSION FRUIT TASTE AND MACA EXTRACT.!</p>
    <button className='w-[170px] h-[60px] border-4 border-white font-semibold p-3 mt-10'>FIND OUT MORE</button>
    </div>
  
    <div data-aos="fade-left" className='w-1/3 h-full hidden sm:flex'>
        <img src={RedCan} className='object-cover w-full h-full pl-7 canShake md:block p-14'/>
    </div>
   
    </div>
    <img src={BackGounrd} className='absolute -z-20 w-full h-screen'/>
    </div>
  )
}

export default Guarana