
import Banner from '@/components/homePage/Banner';
import Stats from '@/components/homePage/Stats';
import TrendingApps from '@/components/homePage/TrendingApps';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stats />
      <TrendingApps from="home" />
    </div>
  );
};

export default HomePage;