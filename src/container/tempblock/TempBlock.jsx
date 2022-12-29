import React from 'react';

import './TempBlock.css';

const BOOKNOW_BTN = "https://squareup.com/appointments/book/92uyj1egwnos8s/L1SCK0086N9VX/start";

const TempBlock = () => {
  return (
    <div className='temp_section text-center flex flex-col items-center justify-center'>
      <span className='focus-text'>Coming <br className='small'/>Soon</span>
      <a href={BOOKNOW_BTN}
        className='m-1 mx-2 btn btn-trans lg:ml-4 mt-6'
      >
        Booking available
      </a>

      <script src='https://square.site/appointments/buyer/widget/92uyj1egwnos8s/L1SCK0086N9VX.js'></script>
      
    </div>
  )
}

export default TempBlock