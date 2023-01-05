import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link,Route, Routes } from 'react-router-dom';

import banner_1 from '../../assets/banner/banner1.jpg';
import banner_2 from '../../assets/banner/banner2.jpg';
import banner_3 from '../../assets/banner/banner3.jpg';
import banner_4 from '../../assets/banner/banner4.jpg';
import banner_5 from '../../assets/banner/banner5.jpg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './banner.css';

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 550 })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <section className='banner flex flex-col md:flex-row md:items-center'>
      <div className='banner__image' aria-label='Banner images'>
        <Slider {...settings}>
          <img src={banner_1} alt="banner1" width={isMobile ? 250 : 800} aria-hidden="true"/>
          <img src={banner_2} alt="banner2" width={isMobile ? 250 : 800} aria-hidden="true"/>
          <img src={banner_3} alt="banner3" width={isMobile ? 250 : 800} aria-hidden="true"/>
          <img src={banner_4} alt="banner4" width={isMobile ? 250 : 800} aria-hidden="true"/>
          <img src={banner_5} alt="banner5" width={isMobile ? 250 : 800} aria-hidden="true"/>
        </Slider>
      </div>
      <div className='banner__content section__padding'>
        <div className='banner__content--titiles mb-4'>
          <h1 className='heading'>Mana 
          <h2 className='banner__content--sup-title'>Thai Massage & Wellness</h2></h1>
        </div>
        <p className='paragraph mb-5' aria-label='Take a break from the world and treat yourself to some well-deserved indulgence at '>Take a break from the world and treat yourself to some well-deserved indulgence at <span className='font-heading' aria-hidden='true'>Mana</span></p>
        <Link to='/about' className='m-1 mx-2 btn lg:ml-4'>
          Learn more
        </Link>
      </div>
    </section>
  )
}

export default Banner