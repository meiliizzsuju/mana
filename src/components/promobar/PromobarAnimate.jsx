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
        console.log('check')
      } else{
        setAnimate('')
      }
    }}>
      <section className='promobar section__padding'>
        <div className='content text-center'>
          <p className={`text-center ` + animate} style={{ zIndex: 1 }}
            aria-label={promomsg}
          >
            {animTextGen()}
          </p>
        </div>
      </section>
    </VisibilitySensor>
  )
}

export default Promobar