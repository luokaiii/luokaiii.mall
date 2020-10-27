import React from 'react';

import MainModule from './Main_module';
import './Main.less';

const DataList = [
  // { title: '小米闪购' },
  {
    title: '手机',
    type: 'large',
    list: [
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90',
        type: 'larger',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: '小米10 至尊版',
        desc: '120X 变焦/120W秒充/120Hz屏幕',
        price: '5299起',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: 'Redmi K30 至尊版',
        desc: '120Hz弹出全面屏，天玑1000+旗舰处理器',
        price: '1999起',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: '腾讯黑鲨3S',
        desc: '骁龙865处理器，120Hz刷新率',
        price: '3799起',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: 'Redmi 9A',
        desc: '5000mAh长循环大电量，6.53"超大护眼屏幕',
        price: '599起',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: '小米10 青春版 5G',
        desc: '50倍潜望式变焦 / 轻薄5G手机',
        price: '1999起',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: '小米10',
        desc: '骁龙865/1亿像素相机',
        price: '3799起',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d037b19b924fdf15b1cc9e671d6628fe.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: 'Redmi K30 Pro',
        desc: '双模5G，骁龙865，弹出全面屏',
        price: '2999起',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: 'Redmi K30 Pro 变焦版',
        desc: '双模5G，骁龙865，弹出全面屏',
        price: '3399起',
      },
    ],
  },
  // { title: '家电' },
  // { title: '智能' },
  // { title: '搭配' },
  // { title: '配件' },
  // { title: '周边' },
];

export default () => {
  return (
    <div className="main-comp">
      {DataList.map(data => (
        <MainModule key={data.title} data={data} />
      ))}
    </div>
  );
};
