import React from 'react';
import { Link } from 'react-router-dom';


import service_img from '../../assets/service.jpg';

import './service.css'

const Service = ({title,link,image}) => {
  return (
    <>
        <Link to={link}
          className='service'
        >
          <img src={service_img} alt={title} />

          <span className='service__title flex items-center justify-center'>{title}</span>
        </Link>
    </>
  )
}

export default Service