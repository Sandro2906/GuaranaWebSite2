import React from 'react'
import HomeComponenImage from '../assets/slide_1_en_1681138103_JokerMango_cover_4200x2000_eng.png'

const HomeComponent = () => {
  return (
    <div name="Home" className='w-full h-[700px] overflow-hidden'>
    <img className='w-full h-full object-cover' src={HomeComponenImage} alt='Home picture' />
    </div>
  )
}

export default HomeComponent