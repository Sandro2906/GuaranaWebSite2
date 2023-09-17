import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import Pic1 from '../assets/126650480162836f8632359536797172_1280x720x007069.jpg'
import Pic2 from '../assets/images.jpg'
import Pic3 from '../assets/1-Joker-World-Brand-Design.jpg'
import Pic4 from '../assets/preview_en_1581328061_brainer_post.jpg'
import Pic5 from '../assets/slide_1_en_1681138103_JokerMango_cover_4200x2000_eng.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const data = [
    {
        src: Pic1,
        text: 'GUARANA ZERO SUGAR FREE',
        link: '/nosuger',
        dataAos: "flip-left"
    },
    {
        src: Pic2,
        text: 'EXIT FESTIVAL 2019',
        link: '/exit',
        dataAos: "flip-left"
    },
    {
        src: Pic3,
        text: 'NO SLEEP 2019.',
        link: '/nosleep',
        dataAos: "flip-up"
    },
    {
        src: Pic4,
        text: 'GURANA BRAINER',
        link: '/nobrain',
        dataAos: "flip-right"
    },
    {
        src: Pic5,
        text: 'YOUR TURN TO WIN',
        link: '/nosuger',
        dataAos: "flip-right"
    },
]

const GuaranaCircle = () => {

    useEffect(()=>{
        AOS.init({duration: 1000})
      })
    

  return (
    <div className='w-full h-auto flex flex-col md:flex-row px-24 py-10 justify-around items-center -z-20 bg-gray-800'>
   
    {data.map(({src, text, link, dataAos})=>(
        <Link to={link} data-aos={dataAos} >
        <div className='flex flex-col items-center justify-center py-5 px-2 -z-10'>
        <div className='w-36 h-36 border-green-400 border-4 rounded-full p-2 bg-gray-800'>
            <img src={src} className='object-cover rounded-full w-full h-full' />
        </div>
            <h1 className='text-white text-2xl font-digital'>{text}</h1>
        </div>
        </Link>
    ))}
    </div>
  )
}

export default GuaranaCircle
