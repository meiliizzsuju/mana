import React from 'react';
import { useNavigate } from 'react-router-dom';

import './navsidebar.css'

const NavSidebar = ({list,category,activepage,wrapperClass}) => {
  const getCategory = () => {
    let path = '/';

    if(!category) return;
    path = path+category+'/';

    return path
  }

  return (
    <div className={wrapperClass+ ' navsidebar'}>
      <ul>
        {list.map((item,i)=> (
          (item.slug === Object.values(activepage)[0]) ?
          (
            <li key={i}>
              <a href={getCategory(category)+item.slug}  className='active'>
                {item.name}
              </a>
            </li>
          ) :
          (
            <li key={i}>
              <a href={getCategory(category)+item.slug}>
                {item.name}
              </a>
            </li>
          )

        ))}
      </ul>
    </div>
  )
}

export default NavSidebar