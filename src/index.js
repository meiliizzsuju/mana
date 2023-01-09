import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from "./helpers/ScrollToTop";
import App from './App';

import './index.css';

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
,document.getElementById('root'))