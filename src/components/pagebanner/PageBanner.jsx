import React from 'react';

import banner_img from '../../assets/default-banner.jpg';
import './PageBanner.css';

const DEFAULT_BANNER_IMG = banner_img;

const PageBanner = ({banner_image,title}) => {

  return (
    <div className='page-banner'>
      <img src={banner_image ? (process.env.PUBLIC_URL+banner_image) : (DEFAULT_BANNER_IMG)} alt="page-banner" aria-hidden='true'/>
      {title && (
        <>
          <div className='page-banner__text section__padding'>
            <h1 className='heading'>{title}</h1>
          </div>
        </>
      )}
    </div>
  )
}

export default PageBanner