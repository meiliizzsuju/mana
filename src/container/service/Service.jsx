import React from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {Header,Footer,NavSidebar,PageBanner} from '../../components/index';

import './service.css'


import {services} from '../../utils/data';

const PAGE_NAME = 'service-detail';
const BOOKNOW_BTN = "https://squareup.com/appointments/book/92uyj1egwnos8s/L1SCK0086N9VX/start";

const Service = () => {
  const serviceId = useParams();
  const isMobile = useMediaQuery({ maxWidth: 550 })

  const get_current_service = services.filter(item => item.slug === Object.values(serviceId)[0]
  )
  const current_service = get_current_service[0];


  return (
    <div className={PAGE_NAME}>
      <Header/>
      <div className='main'>
        <PageBanner banner_image={current_service.banner_image} title={current_service.name} />

        <div className={PAGE_NAME+'__content section__padding'}>

          <div className={current_service.feature_image ? 'has-image container mx-auto' :'container mx-auto'}>
            <div className={PAGE_NAME+'__content--wrapper'}>
              {current_service.price && (
                <div className={PAGE_NAME+'__content--price mb-4'}>
                  <p className='italic'>Pricing: {current_service.price}</p>
                </div>
              )}

              <div className={PAGE_NAME+'__content--description'}>
                <p dangerouslySetInnerHTML={{__html: current_service.description}}></p>
              </div>

              {current_service.presure && (
                <div className={PAGE_NAME+'__content--presure'}>
                  <p>{'['+current_service.presure+']'}</p>
                </div>
              )}

              {current_service.precaution && (
                <div className={PAGE_NAME+'__content--precaution'}>
                  <p>{current_service.precaution}</p>
                </div>
              )}

              <div className={current_service.feature_image ?'my-4' : 'mt-4'}>
                <a href={BOOKNOW_BTN} className='m-1 mx-2 btn lg:ml-4'>
                  Make an appointment
                </a>
              </div>
            </div>

            {current_service.feature_image && (
              <div className={PAGE_NAME+'__content--feature_image'}>
              <img src={process.env.PUBLIC_URL+current_service.feature_image} alt={current_service.name} 
              width={isMobile ? 150 : 250}/>
            </div>
            )}

          </div>

        </div>

        <div className={PAGE_NAME+'__bottom section__padding'}>
          <div className='container mx-auto'>
            <p className={PAGE_NAME+'__bottom--title font-bold'}>Services</p>
            <NavSidebar list={services} category='services' activepage={serviceId} wrapperClass="mt-2"/>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Service