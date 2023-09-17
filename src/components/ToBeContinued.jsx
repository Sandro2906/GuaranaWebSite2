import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const ToBeContinued = () => {

  useEffect(()=>{
    AOS.init({duration: 500})
  })

  return (
    <div className='w-full h-auto md:h-[20px] bg-lime-500 md:text-outline-green'>
    <h1 data-aos="zoom-in-right" className='md:text-[170px] text-9xl md:top-[-300px] md:left-[160px] relative text-white font-extrabold'>TO BE</h1>
    <h1 data-aos="zoom-in-right" className=' md:text-[170px] text-7xl relative md:top-[-320px] md:left-[160px] top-0 font-extrabold'>CONTINUED</h1>
    </div>
  )
}

export default ToBeContinued