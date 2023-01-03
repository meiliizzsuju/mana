import React from 'react';
import { useMediaQuery } from 'react-responsive';
import star_icon from '../../assets/star.png';

import './review.css'

const Review = ({msg,stars}) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 })

  const getStar = () =>{
    let print_star = [];
    if(stars){
      for (let i = 0; i < stars; i++) {
        print_star.push(<img src={star_icon} alt="review-star" width={(isMobile ? (15) : (30))} height={30} className='review__box--star' aria-hidden="true"/>)
      }
    }
    return print_star
  };
  

  return (
    <div className='review__box'> 
      <div className='review__box--top' aria-label={stars+` review stars`}>
      {getStar()}
      </div>
      {msg ?
        (
          <div className='review__box--bottom'>
            <p>{msg}</p>
          </div>
        )
        : ''
      }
    </div>
  )
}

export default Review