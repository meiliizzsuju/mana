import React from 'react';
// eslint-disable-next-line no-unused-vars
import {Header,Banner,Services,Reviews,Footer,CTA,PromobarAnimate,TopBanner} from '../components/index';


const PAGE_NAME = `page-home`;

const BOOKNOW_BTN = "https://squareup.com/appointments/book/92uyj1egwnos8s/L1SCK0086N9VX/start";

const Home = () => {
  return (
    <div className={PAGE_NAME}>
      {/* <TopBanner/> */}
      <Header/>
      <Banner/>
      <Services/>
      <CTA title="Pamper yourself with our range of indulgent treatments"
        link={BOOKNOW_BTN}
        btn_title="Book Now" 
      />
      {/* <PromobarAnimate promomsg='Remedial Massage health fund rebates are available on the spot.'/> */}
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home