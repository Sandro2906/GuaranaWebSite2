import React from 'react'
import NoSugerImg from '../assets/nosuger.PNG'
import NavBar2 from './NavBar2';


const NoSuger = () => {
  return (
    <div className='w-full h-auto bg-gray-800 text-gray-400 overflow-hidden'>
    <NavBar2 />

    <div className='flex justify-center items-center w-full'>
    <img src={NoSugerImg} className='w-full h-[400px] object-cover' alt='Pricture'/>
    </div>

    <div className='w-full h-auto flex flex-col justify-center items-center'>
    <div className='max-w-[500px] px-7 h-auto'>
    <h1 className='text-8xl font-digital font-extrabold pt-7'>Guarana Zero sugar free</h1>
    </div>

    <div className='max-w-[500px] min-w-[400px] h-auto py-4 text-lime-500 flex justify-between items-center'>
    <h1>Nov 2020.</h1>
    <h1>SHARE: Facebook Twitter</h1>
    </div>
    
    <div className='max-w-[500px] h-auto py-5 flex flex-col px-7'>
    <h1 className='py-10'>What if we told you could live a sugar-free reality?
    Are you ready to live with #nofilter?
    Take off your pink glasses: it's time for you to foil without - for a night without sleep - for Guarana Zero without sugar!
    Try the new Guarana ZERO sugar-free: for those for whom the fun is sweet and the reality is unsweetened!</h1>
    </div>
    </div>
        <div className='w-full h-auto py-3 bg-gray-800'>
          <h1 className=' text-black moving-text font-extrabold'>#GUARANANOSLEEP</h1>
        </div>
    </div>
  )
}

export default NoSuger
