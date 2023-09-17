import React from 'react'
import Frist from '../components/Frist'
import Second  from '../components/Second'
import Third from '../components/Third'
import Forth from '../components/Forth'
import Fifth from '../components/Fifth'
import ToBeContinued from '../components/ToBeContinued'
import MovingText from '../components/MovingText'
import OurStory from '../components/OurStory'

const About = () => {
  return (
    <div name='About' className='overflow-hidden'>
    <OurStory />
    <Frist />
    <Second />
    <Third />
    <Forth />
    <Fifth />
    <ToBeContinued />
    <MovingText />
    </div>
  )
}

export default About