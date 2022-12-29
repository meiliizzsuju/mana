import React from 'react';

const CTA = ({title,link,btn_title}) => {
  return (
    <section className='section__padding-lx text-center'> 
      <h3 className='heading mx-auto mb-5 max-w-4xl'>{title}</h3>
      <a href={link} className="btn">{btn_title}</a>
    </section>
  )
}

export default CTA