import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


import service_img from '../../assets/service.jpg';

import './service.css'

const DEFAULT_SERVICE_IMG = service_img;

const Service = ({title,link,serviceObj}) => {
  const navigate = useNavigate();

  console.log(serviceObj)

  return (
    <>
        <div onClick={()=> navigate(`/services/${link}`)}
          className='service'
        >
          <img src={serviceObj.cover_image ? (process.env.PUBLIC_URL+serviceObj.cover_image) : (service_img)} alt={title} />

          <span className='service__title flex items-center justify-center'>{title}</span>
        </div>
    </>
  )
}

export default Service