import React from 'react';
import { NavBar, WingBlank, Carousel } from 'antd-mobile';

import CarouselList from './components/CarouselList'
import './index.less';

export default () => {
  return (
    <div style={{ height: '1000px' }}>
      <NavBar mode="light">微の商城</NavBar>
      <CarouselList />
    </div>
  );
};
