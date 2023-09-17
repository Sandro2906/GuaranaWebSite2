import React from 'react'
import Gif from '../assets/gif-1996.gif'
import Original from '../assets/original-1996.png'
import Festival from '../assets/giphy.gif'

const Frist = () => {
  return (
    <div className='w-full h-auto md:h-[500px] flex flex-col md:flex-row bg-lime-500 justify-around '>

   <div className='flex md:flex-row flex-col'>
   <h1 className='md:text-[200px] text-9xl text-white left-[500px] font-extrabold'>1996</h1>
   <img src={Gif} alt='Picture' className='w-[300px] h-[470px]'/>
   </div>

    <div className='h-auto flex z-10 flex-row md:flex-col  text-black md:text-white'>
    <img src={Original} alt='original' className='w-[120px]'/>
    <p className='w-[200px] h-auto'>
    We made a new drink. Actually, no. We created a new universe. There was a big nothing before us. We captured pure energy from the depths of the Amazon forests.
    </p>
    
    </div>
    <div className='absolute z-0 w-full h-screen'>
        <img className='w-full h-screen md:h-[500px] opacity-25 object-cover'  src={Festival} alt='Festival' />
        </div>
    </div>
  )
}

export default Frist