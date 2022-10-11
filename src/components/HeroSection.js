import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div class='hero-container'>
        <video src='../videos/video-2.mp4'/>
        <h1>ADVENTURE AWAITS</h1>
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