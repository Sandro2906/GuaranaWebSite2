import React from 'react'
import NoBrainImg from '../assets/nobrain.PNG'
import NavBar2 from './NavBar2';
import MainImg from '../assets/main_en_1581299777_brainer.png'


const NoBrain = () => {
  return (
    <div className='w-full h-auto bg-gray-800 text-gray-400 overflow-hidden'>
    <NavBar2 />

    <div className='flex justify-center items-center w-full'>
    <img src={NoBrainImg} className='w-full h-[400px] object-cover' alt='Pricture'/>
    </div>

    <div className='w-full h-auto flex flex-col justify-center items-center'>
    <div className='max-w-[500px] px-3 h-auto'>
    <h1 className='text-8xl font-digital font-extrabold pt-7'>EXIT FESTIVAL 2019</h1>
    </div>

    <div className='max-w-[500px min-w-[400px] h-auto py-4 text-lime-500 flex justify-between items-center'>
    <h1>Oct 2019.</h1>
    <h1>SHARE: Facebook Twitter</h1>
    </div>
    
    <div className='max-w-[500px] h-auto py-5 px-6 flex flex-col'>
    <h1 className='py-10'>Always ready to give its fans more, this time the Owl brought a very smart Owl - Guarana Brainer into its flock. Guarana Brainer is experienced, cunning, has skills and knows how to outsmart everyone. With the added Ginkgo Biloba extract and the well-known watermelon taste, it will support you whenever you need extra focus and memory. Just being awake is often not enough. You need to stay focused on the object of our attention. This is when Brainer steps in.</h1>
    <h1 className='pb-5'>This wicked can was designed by those who need to be alert and focused most - a team of four students. By participating in the Design Never Sleep competition organized by Metropolitan University, and under the Owl's eye, the Blue Pixel student team came up with a design solution for the Guarana Brainer can, and the Owl was more than happy to manufacture it.
    As of October 25th, Guarana Brainer is on the market accompanied with adequate support on Guarana social networks, and to hear the rest of the story - stay tuned.</h1>
    </div>
    <div className='flex justify-center items-center py-3'>
    <div className='w-[500px] h-[300px] border-2 border-lime-400'>
    <img src={MainImg} alt='Picture' className='w-full h-full object-cover'/>
    </div>
    </div>
      <div className='w-full h-auto py-3 bg-gray-800 '>
        <h1 className=' text-black moving-text font-extrabold'>#GUARANANOSLEEP</h1>
      </div>
    </div>
    </div>
  )
}

export default NoBrain
