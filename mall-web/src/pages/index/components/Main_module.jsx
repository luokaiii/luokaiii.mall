import React from 'react';
import { RightCircleFilled } from '@ant-design/icons';

export default () => {
  return (
    <div className="content main-module">
      <div className="main-module_header">
        <h2 className="title">标题</h2>
        <div className="more">
          查看全部
          <RightCircleFilled />
        </div>
      </div>
      <div className="main-module_content">
        <div className="main-module_item main-module_item_larger">1</div>
        <div className="main-module_item">2</div>
        <div className="main-module_item">3</div>
        <div className="main-module_item">4</div>
        <div className="main-module_item">5</div>
        <div className="main-module_item">6</div>
        <div className="main-module_item">7</div>
        <div className="main-module_item">8</div>
        <div className="main-module_item">9</div>
      </div>
      <div className="main-module_footer">底部一个推广的图</div>
    </div>
  );
};
