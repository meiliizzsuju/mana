import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link,Route, Routes } from 'react-router-dom';
import banner_img from '../../assets/banner.jpg';

import './banner.css';

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 550 })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  console.log('isRetina',isRetina)
  console.log('isMobile',isMobile)

  return (
    <section className='banner flex flex-col md:flex-row md:items-end'>
      <div className='banner__image'>
        <img src={banner_img} alt="banner" width={isMobile ? 250 : 800}/>
      </div>
      <div className='banner__contant section__padding'>
        <h1 className='heading'>At Mana</h1>
        <h2 className='paragraph mb-5'>Take a break from the world and treat yourself to some well-deserved indulgence at Mana</h2>
        <Link to='/about' className='m-1 mx-2 btn lg:ml-4'>
          Learn more
        </Link>
      </div>
    </section>
  )
}

export default Banner