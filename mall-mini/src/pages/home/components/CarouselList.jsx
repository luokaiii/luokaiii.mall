import React from 'react';
import { WingBlank, Carousel } from 'antd-mobile';
import CarouselImg1 from '../../../assets/home/carousel1.jpg';
import CarouselImg2 from '../../../assets/home/carousel2.jpg';
import CarouselImg3 from '../../../assets/home/carousel3.jpg';
import CarouselImg4 from '../../../assets/home/carousel4.jpg';

const ImgList = [CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4];

export default () => {
  return (
    <WingBlank>
      <Carousel autoplay={false} infinite>
        {ImgList.map(item => (
          <img
            key={item}
            alt=""
            src={item}
            style={{ width: '100%', verticalAlign: 'top', borderRadius: '8px' }}
          />
        ))}
      </Carousel>
    </WingBlank>
  );
};
