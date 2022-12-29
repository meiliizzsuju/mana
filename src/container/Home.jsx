import React from 'react';
import Header from '../components/Header';

import {Banner,Services} from '../container/index';

const PAGE_NAME = `page-home`;

const Home = () => {
  return (
    <div className={PAGE_NAME}>
      <Header/>
      <Banner/>
      <Services/>
    </div>
  )
}

export default Home