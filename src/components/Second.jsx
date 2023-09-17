import React from 'react'
import Picture from '../assets/gif-1998.gif'
import Original from '../assets/original-1998.png'

const Second = () => {
  return (
    <div className='w-full h-auto flex flex-col md:flex-row bg-lime-500 justify-around items-center py-10 md:py-0'>
        <img  src={Picture}/>
        <div className='w-[300px] h-auto flex flex-col pt-4'>
        <img  src={Original} className='w-[110px] h-[250px]'/>
        <p>Inspired by Brazil, we have changed to reach new recognition. Our first can, but, as it turned out to be, not the last one.</p>
        </div>
        <h1 className='text-[200px] text-white font-extrabold'>1998</h1>
    </div>
  )
}

export default Second