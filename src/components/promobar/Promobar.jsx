import React from 'react';

import './promobar.css';

const Promobar = ({promomsg}) => {

  return (
      <section className='promobar section__padding'>
        <div className='content text-center'>
          <p className='paragraph'>Health fund rebate is currently unavailable until mid-end of May</p>
          <span>Thank you for your patience</span>
        </div>
      </section>
  )
}

export default Promobar