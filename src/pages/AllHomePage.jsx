import React from 'react'
import GuaranaCircle from "./GuaranaCircle";
import GuaranaNews from "./GuaranaNews";
import HomeComponent from "./HomeComponent";
import NavBar from './NavBar';
import GuaranaSlides from './GuaranaSlides';
import About from './About';


const AllHomePage = () => {
  return (
    <div className='overflow-hidden'>
    <NavBar />
    <HomeComponent />
    <GuaranaCircle />
    <GuaranaSlides />
    <GuaranaNews />
    <About />
    </div>
  )
}

export default AllHomePage