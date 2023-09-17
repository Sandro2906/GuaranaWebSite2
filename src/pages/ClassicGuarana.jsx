import React, { useEffect } from 'react'
import ClassicCan from '../assets/original-can-new.png'
import BackGounrd from '../assets/103330.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Guarana= () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
  })

  return (
    <div name={"Classic"} className='w-full h-screen flex flex-col overflow-hidden'>
    
    <div className='flex w-full flex-grow justify-around'>


    <div data-aos="fade-up" className='text-white w-[400px] h-full flex flex-col justify-center '>
    <h1 className='md:text-8xl text-5xl font-extrabold md:text-outline-green italic shadowtext2'>GUARANA
    ORIGINAL
    </h1>
    <p className='text-sm text-white my-3'>SOME CALL IT THE ORIGINAL, BUT WE CALL IT GUA. IT HAS BEEN CALLED GREEN, PURE ENERGY, OWL OR SIMPLY GUARANA, BECAUSE EVERYONE KNOWS THE ORIGINAL GUARANA.</p>
    <button className='w-[170px] h-[60px] border-4 border-white font-semibold p-3 mt-10'>FIND OUT MORE</button>
    </div>

    <div data-aos="fade-left" className='w-1/3 h-full hidden sm:flex '>
        <img src={ClassicCan} className='object-cover w-full h-full canShake md:block  p-14'/>
    </div>

    </div>
    <img src={BackGounrd} className='absolute -z-20 w-full h-screen'/>
    </div>
  )
}

export default Guarana