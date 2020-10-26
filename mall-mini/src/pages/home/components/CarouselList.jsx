import React from 'react';
import { WingBlank, Carousel } from 'antd-mobile';
import CarouselImg1 from '../../../assets/home/carousel1.jpg';
import CarouselImg2 from '../../../assets/home/carousel2.jpg';
import CarouselImg3 from '../../../assets/home/carousel3.jpg';
import CarouselImg4 from '../../../assets/home/carousel4.jpg';

const ImgList = [
  {
    key: 'img1',
    url:
      'https://luokaiii-h5.oss-cn-shanghai.aliyuncs.com/static/home/carousel1.jpg',
  },
  {
    key: 'img2',
    url:
      'https://luokaiii-h5.oss-cn-shanghai.aliyuncs.com/static/home/carousel2.jpg',
  },
  {
    key: 'img3',
    url:
      'https://luokaiii-h5.oss-cn-shanghai.aliyuncs.com/static/home/carousel3.jpg',
  },
  {
    key: 'img4',
    url:
      'https://luokaiii-h5.oss-cn-shanghai.aliyuncs.com/static/home/carousel4.jpg',
  },
];

export default () => {
  return (
    <WingBlank>
      <Carousel autoplay={false} infinite>
        {ImgList.map(item => (
          <div key={item.key}>
            <img
              alt=""
              width="100%"
              src={item.url}
              style={{
                borderRadius: '8px',
              }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </div>
        ))}
      </Carousel>
    </WingBlank>
  );
};
