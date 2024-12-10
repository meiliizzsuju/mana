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
          <Review msg='Mana Thai Massage and Wellness is a true treasure in the heart of Dee Why! The massages are absolutely lovely, and their lash services are second to none. Ornsaya did my lashes six weeks ago, and they still look as fresh and beautiful as the day she applied them. Such incredible quality! The team is super friendly, and you can really feel the care and dedication in this family-run business. Highly recommend this place for anyone looking for relaxation and top-notch beauty services!'
          stars={5}
          />
          <Review msg='I went to Mana yesterday with the worst back and neck pain. I originally paid for a 60 minutes remedial massage, but it was so good that I ended up asking for another 30 minutes.
Nicki was extremely attentive and knowledgeable, and her massage was divine. She really dedicated a lot of time to "untie the knots" in my back and I left feeling like a new person. She is lovely and has such a great energy!

All the staff were very friendly (as all Thai people, hence why I love them). I will definitely be coming back and recommending it to all my friends!'
          stars={5}
          />
          <Review msg='The team here is great: they provide a high quality massage and the studio is spotless. Got a 45 min foot massage to help with an ankle that had restricted motion and they managed to loosen it up. Masseuses are very good at diagnosing the source of the problem and working it out.'
          stars={5}
          />
          <Review msg='Great massage and lady was so helpful and gave me tips what stretches to do. Felt so relaxed afterwards and definitely will be going back.'
          stars={5}
          />
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