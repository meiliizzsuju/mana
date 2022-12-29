import React from 'react';

import './TempBlock.css'

const TempBlock = () => {
  return (
    <div className='temp_section text-center flex flex-col items-center justify-center'>
      <span className='focus-text'>Coming <br className='small'/>Soon</span>
      <a href="https://mana-107483.square.site/"
        className='m-1 mx-2 btn btn-trans lg:ml-4 mt-6'
      >
        Booking available
      </a>
    </div>
  )
}

export default TempBlock