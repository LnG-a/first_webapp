import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import video from '../videos/video-1.mp4'

function HeroSection() {
  return (
    <div class='hero-container'>
        <video src={require('../videos/video-1.mp4').default} autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button class='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button class='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
                WATCH TRAILER <i class="fas fa-play-circle"></i>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection