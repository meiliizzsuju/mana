import React, { useEffect } from 'react';
import Header from '../components/Header';
import TempBlock from './tempblock/TempBlock';

const PAGE_NAME = `page-home`;

const Home = () => {
  useEffect(() => {
    document.title = 'Mana Dee Why';
  }, []);

  return (
    <div className={PAGE_NAME}>
      <Header/>
      <TempBlock/>
    </div>
  )
}

export default Home