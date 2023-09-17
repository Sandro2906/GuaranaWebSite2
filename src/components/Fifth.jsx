import React from 'react'
import Can from '../assets/original-can-new.png'
import Picture from '../assets/gif-2015.gif'

const Fifth = () => {
  return (
    <div className='w-fll h-auto md:h-[600px] flex flex-col md:flex-row bg-lime-500 pb-56 justify-center overflow-hidden'>

   <img src={Picture} alt='Picture' className='w-[500px] h-[300px]'/>
   <img src={Can} alt='Picture' className='w-[250px] h-auto pt-20'/>

   <div className=' flex justify-center flex-col md:flex-row md:block'>
        <h1 className='text-[170px] text-white font-extrabold'>2015</h1>
        <p className='w-[220px]'>The Owl is no longer just the face of Guarana. It has become its personality! Sarcastic, witty, insightful, without mincing its words. Bro owl!</p>
   </div>
    
    </div>
  )
}

export default Fifth