import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/owner.webp'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Owner'
              path='/Owner'
            />
             <CardItem
              src='images/Guest.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Guest'
              path='/Guest'
            />
            <CardItem
              src='images/booking.gif'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='booking'
              path='/Booking'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/about.webp'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='About'
              path='/About'
            />
            <CardItem
              src='images/contact.webp'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Contact Us'
              path='/ContactUs'
            />
            {/* <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
