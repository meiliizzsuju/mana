import React from 'react';
import Service from '../../components/service/Service';

import './services.css'

const Services = () => {
  return (
    <section className='services'>
      <div className='section__padding'>
        <h2 className='heading'>Services</h2>
      </div>

      <div className='services__container'>
        <Service title="Traditional Thai Massage"
          link='/ser1'
        />
        <Service title="Thai Oil Massage"
          link='/ser2'
        />
        <Service title="Relaxing/Aroma Oil Massage"
          link='/ser3'
        />
        <Service title="Organic Coconut Oil & Hot Stone Massage"
          link='/ser4'
        />
        <Service title="Remedial / Deep Tissue Massage"
          link='/ser5'
        />
      </div>
    </section>
  )
}

export default Services