import React, { useState } from 'react'
import Logo from '../assets/loga-maly-detail_0022_guarana-logo-owl-2-.png'
import {Link} from 'react-router-dom'

const NavBar2 = () => {
    

  return (
    <div className='w-full h-28 flex justify-between items-center py-4 text-black bg-lime-400 z-10 overflow-hidden' >
        <div className='pl-10 cursor-pointer'>
            <img className='w-60 h-24' src={Logo} />
        </div>

        <div className=' md:pr-10 text-2xl font-extrabold cursor-pointer'>
            <Link to='/' smooth duration={300}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
           </Link>
        </div>

        <div className='md:hidden pr-10 z-20 cursor-pointer text-white'>
       
      </div>
    </div>
  )
}

export default NavBar2