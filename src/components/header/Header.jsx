import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'
import logo from '../../assets/mana-logo.png';

const BOOKNOW_BTN = "https://squareup.com/appointments/book/92uyj1egwnos8s/L1SCK0086N9VX/start";

const Header = () => {
  return (
    <header className='header section__padding'>
      <div className='mx-auto'>
        <div className='flex flex-col justify-center items-center md:flex-row w-full'>
          <Link
            to='/'
            className='block w-2/5 m-2 md:w-40 header-logo'
          >
            <img src={logo} alt="logo" 
            />
          </Link>
          
          <div className='header__contact flex items-center md:w-4/5 md:justify-end'>
            <a href='tel:0280187443' className='m-1 mx-2'>Call : (02) 8018 7443</a>

            <a href={BOOKNOW_BTN}
              className='m-1 mx-2 btn lg:ml-4'
            >
              Book Now
            </a>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header