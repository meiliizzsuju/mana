import React from 'react'
import { Footer, Header, NavSidebar, PageBanner } from '../../components'

const PAGE_NAME = 'about-us';
const BOOKNOW_BTN = "https://squareup.com/appointments/book/92uyj1egwnos8s/L1SCK0086N9VX/start";

export const About = () => {
  return (
    <div className={PAGE_NAME}>
      <Header />
      <div className='main'>
        <PageBanner title="About us" />

        <div className={PAGE_NAME + '__content section__padding'}>
          <div className='has-image container mx-auto'>
            <h2 className='paragraph page-titile-margin text-center'>Thank you for visiting Mana Thai Massage & Wellness!</h2>
            <div className='focus-container'>  
              <p>
              We are a Thai family-owned business in Dee Why, offering authentic and professional Thai massage services. While Mana was established in 2022, our experience in the Thai massage industry spans over 15 years.
              </p>
              <p>
              Our mission is to provide a relaxing and rejuvenating experience tailored to your needs. Whether you’re seeking relief from muscle tension, stress, or simply want to unwind, our trained female massage therapists are here to help. We take pride in delivering high-quality treatments in a warm and welcoming environment.
              </p>

              <p>
              Your well-being is our priority. Let us know how we can assist you—book your massage today and feel the difference with Mana Thai Massage & Wellness.
              </p>
            </div>

            <p className='text-center'>
              <a href={BOOKNOW_BTN}
                className='m-1 mx-2 btn lg:ml-4'
                target='_blank'
              >
                Book massage with us
              </a>
            </p>
          </div>

        </div>

        <div className={PAGE_NAME + '__bottom section__padding'}>

        </div>

      </div>
      <Footer />
    </div>
  )
}
