import React, { useEffect, useState } from 'react';
import Logo from '../assets/loga-maly-detail_0022_guarana-logo-owl-2-.png';
import { Link } from 'react-scroll';
import AOS from 'aos'
import 'aos/dist/aos.css'

    AOS.init({duration: 1000})
 
const NavBar = () => {
  const [tr, setTr] = useState(false);

  const closeMenu = () => {
    setTr(false);
  };
 

  return (
    <div className='w-full h-28 flex justify-between items-center py-4 bg-lime-400 z-50 overflow-hidden'>
      <div className='pl-10 cursor-pointer'>
        <img className='w-60 h-24' src={Logo} alt='Logo' />
      </div>
  
      <div className='md:flex hidden pr-10 text-2xl font-extrabold cursor-pointer text-white ' >
        <Link to={'Home'} smooth duration={300} onClick={closeMenu}>
          <h1 className='pr-8'>HOME</h1>
        </Link>
        <Link to={'Products'} smooth duration={400} onClick={closeMenu}>
          <h1 className='pr-8'>PRODUCTS</h1>
        </Link>
        <Link to={'News'} smooth duration={500} onClick={closeMenu}>
          <h1 className='pr-8'>NEWS</h1>
        </Link>
        <Link to={'About'} smooth duration={500} onClick={closeMenu}>
          <h1 className='pr-8'>ABOUT</h1>
        </Link>
      </div>

      <div
        className='md:hidden pr-10 z-20 cursor-pointer text-white'
        onClick={() => setTr(!tr)}
      >
        {tr ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
        )}
      </div>

      {tr && (

        <ul data-aos="fade-down" className='flex flex-col items-center justify-center top-0 left-0 absolute w-full h-screen bg-lime-400'>
          <Link to='Home' onClick={closeMenu}>
            <li className='py-8 text-4xl cursor-pointer font-extrabold hover:text-white'>HOME</li>
          </Link>
          <Link to='Products' onClick={closeMenu}>
            <li className='py-8 text-4xl cursor-pointer font-extrabold hover:text-white'>PRODUCTS</li>
          </Link>
          <Link to='News' onClick={closeMenu}>
            <li className='py-8 text-4xl cursor-pointer font-extrabold hover:text-white'>NEWS</li>
          </Link>
        </ul>
       
      )}
    </div>
  );
};

export default NavBar;
