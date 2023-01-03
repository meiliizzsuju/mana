import React from 'react';
import Review from '../../components/review/Review';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './reviews.css';

const REVIEW_ADD_LINK = 'https://g.page/r/CaHwlKW17d4BEB0/review';


const Reviews = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='reviews'>
      <div className='section__padding'>
        <h2 className='heading'>Voices of Our Customers</h2>
      </div>

      <div className='reviews__container'>
        <Slider {...settings}>
          <Review msg='We just moved to the area and I had a wonderful experience here! The massage therapist was amazing and kind, and genuinely wanted to help. I left feeling so good. I’ll definitely be back! Thank you 🙏'
          stars={5}
          />
          <Review msg='Had my first Thai massage experience from the staff at Mana. My muscles tend to tighten up but after massage, I came out rejuvenated and muscles relaxed. 100% recommend.'
          stars={5}
          />
          <Review msg="Fantastic foot massage, sat back and relaxed. Highly recommend."
          stars={5}
          />
          <Review msg="Wonderful deep tissue massage from lovely lady 'Nicky' she is very experienced, nice and quiet place, will be returning for sure!
  Thanks Nicky, you helped me alot, Regards, Wendy"
          stars={5}
          />
          <Review msg="Excellent traditional Thai massage. Fantastic facilities, friendly staff and affordable. Highly recommended."
          stars={5}
          />
        </Slider>
      </div>

      <div className='reviews__footer text-center section__padding'>
        <a href={REVIEW_ADD_LINK} target='_blank' rel="noreferrer"  className='btn btn-trans my-6 mx-auto'>Share us your thoughts..</a>
      </div>
    </section>
  )
}

export default Reviews