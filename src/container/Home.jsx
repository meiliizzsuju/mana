import React from 'react';

import {Header,Banner,Services,Reviews,Footer,CTA,PromobarAnimate,TopBanner} from '../components/index';


const PAGE_NAME = `page-home`;

const BOOKNOW_BTN = "https://squareup.com/appointments/book/92uyj1egwnos8s/L1SCK0086N9VX/start";

const Home = () => {
  return (
    <div className={PAGE_NAME}>

      <Header/>
      <Banner/>
      <Services/>
      <CTA title="Pamper yourself with our range of indulgent treatments"
        link={BOOKNOW_BTN}
        btn_title="Book Now" 
      />

      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home