import React from 'react'
import Can from '../assets/original-2007-14.png'
import Gif from '../assets/gif-2011.gif'

const Forth = () => {
  return (
    <div className='w-full h-auto md:items-center md:h-[600px] flex flex-col md:flex-row bg-lime-800 px-42 pl-10'>
    <img src={Gif} alt='Picture' className='w-[350px] h-[500px] pt-10 md:pt-0 md:ml-56'/>

    <h1 className='md:text-[200px]  text-9xl font-extrabold md:absolute text-white left-[25%]'>2013</h1>

    <div className='flex flex-col pr-24 mx-auto pb-10 md:pb-0'>
    <img className='w-[120px]' src={Can} alt='Picture'/>
    <p className='w-[240px] md:w-[170px] text-white'>On behalf of the OWL, GUARANA and NO SLEEP. For the first time this owl trinity appears on the redesigned can. This is an ongoing redesign, which gives and never stops. As the old Faithless song “Insomnia” says: “I can get no sleep”.</p>
    </div>

    </div>
  )
}

export default Forth