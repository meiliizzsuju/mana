import React from 'react'
import { Footer, Header, PageBanner } from '../../components'

const PAGE_NAME = 'why-choose-us';
const BOOKNOW_BTN = "https://squareup.com/appointments/book/92uyj1egwnos8s/L1SCK0086N9VX/start";

export const WhyUs = () => {
  return (
    <div className={PAGE_NAME}>
      <Header />
      <div className='main'>
        <PageBanner title="Why choose 'Mana'" />

        <div className={PAGE_NAME + '__content section__padding'}>
          <div className='has-image container mx-auto'>
            <h2 className='paragraph page-titile-margin text-center'>Top 10 Reasons to Choose Mana Thai Massage & Wellness</h2>
            <div className='focus-container'>  
              <p>
              At Mana Thai Massage & Wellness, we are committed to providing the best Thai massage experience in Dee Why. Here’s why our clients love and trust us:
              </p>
              
              <ol className='why-us-list'>
                <li>
                  <h3>1. 100% Private Massage Rooms</h3> 
                  <p>Enjoy complete privacy during your massage. Our rooms have closed doors—no curtains, ensuring a quiet and comfortable experience.</p>
                </li>
                <li>
                  <h3>2. Choose Your Own Therapist</h3> 
                  <p>We understand that everyone has personal preferences, so we give you the option to choose the therapist you feel most comfortable with.</p>
                </li>
                <li>
                  <h3>3. Highly Trained & Experienced Therapists</h3> 
                  <p>Our massage therapists have 5 to 20 years of experience, using expert techniques to relieve tension and enhance well-being.
                  </p>
                </li>
                <li>
                  <h3>4. Locally Owned Thai Family Business</h3> 
                  <p>Support a small, family-run business in Dee Why that brings authentic Thai massage traditions to the community with over 15 years experience in Thai massage industry.
                  </p>
                </li>
                <li>
                  <h3>5. HICAPS for Remedial Massage</h3> 
                  <p>We offer HICAPS for remedial massage, allowing you to claim your treatment instantly with your private health insurance—no waiting for reimbursements!
                  </p>
                </li>
                <li>
                  <h3>6. Online Booking Available</h3> 
                  <p>Easily book your appointment online at your convenience, making it simple to schedule your relaxation whenever it suits you.
                  </p>
                </li>
                <li>
                  <h3>7. Tailored Massage for Your Needs</h3> 
                  <p>We listen to your concerns and adjust our techniques to target problem areas, ensuring you receive personalised care and relief.
                  </p>
                </li>
                <li>
                  <h3>8. Relaxing & Clean Environment</h3> 
                  <p>Our space is calm, hygienic, and peaceful, designed to help you unwind and de-stress from the moment you walk in.
                  </p>
                </li>
                <li>
                  <h3>9. Affordable & High-Quality Service</h3> 
                  <p>We provide premium Thai massage at reasonable prices, giving you professional care and great value for your money.
                  </p>
                </li>
                <li>
                  <h3>10. We Are Here to Help</h3> 
                  <p>Whether you need stress relief, muscle tension release, or deep relaxation, our team is dedicated to supporting your well-being.
                  </p>
                </li>
              </ol>

              <p>Book your appointment today and experience the Mana Thai Massage difference!</p>
            </div>

            <div className='mt-12'>
              <p className='text-center'>
                <a href={BOOKNOW_BTN}
                  className='m-1 mx-2 btn lg:ml-4'
                  target='_blank'
                >
                  Book massage at Mana
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className={PAGE_NAME + '__bottom section__padding'}>

        </div>

      </div>
      <Footer />
    </div>
  )
}
