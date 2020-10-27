import React from 'react';

import MainModule from './Main_module';
import './Main.less';

const DataList = [
  { title: '小米闪购' },
  { title: '手机' },
  { title: '家电' },
  { title: '智能' },
  { title: '搭配' },
  { title: '配件' },
  { title: '周边' },
];

export default () => {
  return (
    <div className="main-comp">
      <MainModule />
    </div>
  );
};
