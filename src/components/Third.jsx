import React from 'react'
import Can from '../assets/original-2002.png'
import Picture from '../assets/gif-2002.gif'
import Bg from '../assets/vinyl-disc-dance-music.gif'

const Third = () => {
  return (
    <div className='w-full h-auto flex md:flex-row flex-col justify-center bg-lime-600 -z-50 items-center py-10'>
    <h1 className='text-[200px] text-white z-10 font-extrabold'>2002</h1>
    <div className='w-[300px] h-auto flex md:block justify-center z-10'>
    <img src={Can} alt='picture' className='w-[120px]'/>
    <p className='md:w-[160px] w-[290px] z-10'> Football force from Brazil is conquering the world. The new can is conquering the world of parties, libraries, gyms accompanied with the slogan “Force from Brazil”. Being pumped by some rhymes and rhythms.</p>
    </div>
    <img src={Picture} alt='picture' className='w-[400px] h-[400px] z-10'/>

   
    <div className='absolute z-0 w-full h-screen pt-11 hidden md:block'>
        <img className='w-full h-screen md:h-[645px] opacity-25 object-cover'  src={Bg} alt='Festival' />
        </div>
    </div>
  )
}

export default Third