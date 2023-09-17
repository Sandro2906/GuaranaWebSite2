import React, { useEffect } from 'react'
import JokerCan from '../assets/Jokic_konzerva.png'
import BackGounrd from '../assets/pngtree-abstract-yellow-and-black-grungy-texture-background-image_725437.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const SmallCans = () => {

  useEffect(()=>{
    AOS.init({duration: 1000})
  })

  return (
    <div name={"Products"} className='w-full h-auto md:h-screen flex flex-col overflow-hidden'>
    
    <div className='flex w-full flex-grow md:flex-row flex-col-reverse md:justify-around justify-center items-center'>

  
    <div data-aos="fade-up" className='text-white w-[400px] h-full flex flex-col px-10 justify-center'>
    <h1 className='text-5xl font-extrabold md:text-outline italic shadowtext2'>NEW MVP FLAVOR!
    MANGO WITH
    </h1>
    <h1 className='text-5xl font-extrabold md:text-outline italic shadowtext2'>THE TASTE OF
    THE TITLE!</h1>
    <p className='text-sm text-white my-3'>DREAM TEAM JOKER GUARANA HAS BECOME RICHER FOR ANOTHER MEMBER - THE UNIQUE JOKER MANGO WITH THE TASTE OF THE MVP TITLE! EXPERIENCE THE EXPOLOSION OF POSITIVE ENERGY AND JOIN MANGOMANIA THIS SPRING WITH THE REFRESHING JOKER MANGO!</p>
    <button className='w-[170px] h-[60px] border-4 border-white font-semibold p-3 mt-10 mb-10 md:mb-0'>FIND OUT MORE</button>
    </div>
 
       
    <div data-aos="fade-left" className='md:w-1/3 w-[300px] h-full'>
        <img src={JokerCan} className='object-cover w-full h-full pl-7 canShake '/>
    </div>
 
    </div>
    <img src={BackGounrd} className='absolute -z-20 w-full h-full'/>
    </div>
  )
}

export default SmallCans
