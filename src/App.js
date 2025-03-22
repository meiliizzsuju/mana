import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './container/Home';
import Service from './container/service/Service'
import { About } from './container/about/About';

const App = () => {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/services/:serviceId' element={<Service />} />
      <Route path='/about-us' element={<About />} />
    </Routes>
  )
}

export default App