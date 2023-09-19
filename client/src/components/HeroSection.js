import '../App.css';
import React from 'react';
import { Button } from '../components/Button';
import '../styles/HeroSection.css';
import foodVideo from '../videos/foodVideo.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='VideoTag' autoPlay loop muted>
        <source src= {foodVideo} type='video/mp4'/>
      </video>
      <h1 className='text'>FETA Meal Plans</h1>
      <p className='text'>Don't Think Just EAT!</p>
      <div className='hero-btns'>
        <Button className= 'btns'
         buttonStyle='btn--outline'
         buttonSize='btn--large'>
            GET STARTED
        </Button>
      </div>

    </div>
  )
}

export default HeroSection
