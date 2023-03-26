import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import './promobar.css';

const Promobar = ({promomsg}) => {
  const [animate, setAnimate] = useState('');
  const letters = [...promomsg];


  const animTextGen = () => {
    const printLetter = []
    for (let i = 0; i < letters.length; i++) {
      const item = letters[i];
      const animDelay = `calc(.05s * ${i+1})`;
      printLetter.push(<span aria-hidden="true" style={{animationDelay: animDelay}} key={i} className={item === ' ' ? ('spacing paragraph') : 'paragraph'}>{item}</span>)
    }

    return printLetter
  }

  return (
    <VisibilitySensor onChange={(isVisible) => {
      if (isVisible === true){
        setAnimate('waviy')
      } else{
        setAnimate('')
      }
    }}>
      <section className='promobar section__padding'>
        <div className='content text-center'>
          {/* Pull back after helthfund is fixed */}
          {/* <p className={`text-center ` + animate} style={{ zIndex: 1 }}
            aria-label={promomsg}
          >
            {animTextGen()}
          </p> */}
          <p className='paragraph'>Health fund rebate is currently unavailable until mid-end of May</p>
          <span>Thank you for your patience</span>
        </div>
      </section>
    </VisibilitySensor>
  )
}

export default Promobar