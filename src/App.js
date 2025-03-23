import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './container/Home';
import Service from './container/service/Service'
import { About } from './container/about/About';
import { WhyUs } from './container/why-us/WhyUs';

const App = () => {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/services/:serviceId' element={<Service />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/why-choose-us' element={<WhyUs />} />
    </Routes>
  )
}

export default App