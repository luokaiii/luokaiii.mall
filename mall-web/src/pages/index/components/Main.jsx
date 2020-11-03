import React from 'react';

import MainModule from './Main_module';
import './Main.less';

const DataList = [
  {
    title: '手机',
    footer:
      '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/47addc32aff1d2a84fc4535707190881.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
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
  {
    title: '家电',
    footer:
      '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3b86ede4dd31d7c126d56fbdde4f855.jpg?thumb=1&w=1226&h=120&f=webp&q=90',
    list: [
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f256b81e4233333692eece77ed06ebc2.jpg?thumb=1&w=234&h=300&f=webp&q=90',
        type: 'picture',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: 'Redmi 红米电视 70英寸',
        desc: '70英寸震撼巨屏，4K画质，细腻如真',
        price: '3249元',
        originPrice: '3799元',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: '小米全面屏电视E32C',
        desc: '全面屏设计，人工智能系统',
        price: '899元',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: '小米全面屏电视E55A',
        desc: '全面屏设计，人工智能语音',
        price: '2299起',
      },
      {
        cover:
          '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
        title: '米家空调',
        desc: '出众静音，快速制冷热',
        price: '1499',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86567ac179a32fa9af05f89a45e57cbe.jpg?thumb=1&w=234&h=300&f=webp&q=90',
        type: 'picture',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: '米家互联网洗烘一体机 Pro 10kg',
        desc: '智能洗烘，省心省力',
        price: '3299',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: 'Redmi全自动波轮洗衣机1A 8kg',
        desc: '一键操作，父母都爱用',
        price: '849',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        title: '15.6" 四核i7 16G 独显 512G',
        desc: '全面均衡的国民轻薄本',
        price: '4699',
      },
      {
        cover:
          '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=100&h=100&f=webp&q=90',
        title: 'Air 13.3" 2019款',
        desc: '',
        price: '5499',
      },
    ],
  },
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
