import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container '>
      {/* <img src='/images/homeWall.jpg'/> */}
      <h1>Advanced Parking Management</h1>
      <p>What are you waiting for? book your slot now!!</p> 
      <div className='hero-btns'>
        {/* <Link to='sign-up'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Book Slot Now 
        </Button>
        </Link> */}
      </div>
    </div>
  );
}

export default HeroSection;
