import React from 'react';
import { Carousel } from 'antd';

export default () => {
  return (
    <section className="details-main_left">
      <Carousel autoplay dotPosition="bottom" speed={5000}>
        <img
          src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.51396359.jpg"
          alt=""
        />
        <img
          src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.43258180.jpg"
          alt=""
        />
        <img
          src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597145894.39134342.jpg"
          alt=""
        />
      </Carousel>
      <div>缺了个左右切换的按钮</div>
    </section>
  );
};
