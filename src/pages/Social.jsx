import React from 'react'

import Instagram from '../assets/Black-And-White-Instagram-Logo-PNG-File.png'
import Facebook from '../assets/images-for--facebook-icon-png-27.png'
import YouTube from '../assets/YouTube-icon-black-png.png'

const Social = () => {
  return (
    <div className='w-full h-auto pt-10  justify-center items-center bg-black flex overflow-hidden '>
        <a href='https://www.facebook.com/guaranasovica/'><img src={Facebook} alt='Slika' className='w-11 h-11 '/></a>
       <a className='mr-5 ml-5' href='https://www.instagram.com/guarananosleep/'> <img src={Instagram} alt='Slika' className='w-11 h-11'/></a>
       <a href='https://www.youtube.com/channel/UCAPXETgIKUH_P1Bi0jpFVIQ'> <img src={YouTube} alt='Slika' className='w-14 h-10'/></a>
    </div>
  )
}

export default Social