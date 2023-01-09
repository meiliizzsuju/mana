import React from 'react';
import Service from '../../components/service/Service';

import './services.css';

import {services} from '../../utils/data';

const Services = () => {
  return (
    <section className='services'>
      <div className='section__padding'>
        <h2 className='heading'>Services</h2>
      </div>

      <div className='services__container'>
        {
          services.map((service,i) => (
            <Service title={service.name}
              link={service.slug}
              serviceObj={service}
              key={service.slug}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Services