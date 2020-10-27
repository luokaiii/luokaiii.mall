import React from 'react';
import { RightCircleFilled } from '@ant-design/icons';

const RenderItem = ({ item }) => {
  const type = item.type;
  if (type == 'larger') {
    return (
      <div className="main-module_item main-module_item_larger">
        <img src={item.cover} />
      </div>
    );
  }

  return (
    <div className="main-module_item" key={item.title}>
      <div className="main-module_item_cover">
        <img src={item.cover} alt />
      </div>
      <div className="main-module_item_title">{item.title}</div>
      <div className="main-module_item_desc">{item.desc}</div>
      <div className="main-module_item_price">{item.price}</div>
    </div>
  );
};

export default ({ data }) => {
  return (
    <div className="content main-module">
      <div className="main-module_header">
        <h2 className="title">{data.title}</h2>
        <div className="more">
          查看全部
          <RightCircleFilled />
        </div>
      </div>
      <div className="main-module_content">
        {data.list.map(item => (
          <RenderItem key={item.title} item={item} />
        ))}
      </div>
      <div className="main-module_footer">
        <div>
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47addc32aff1d2a84fc4535707190881.jpg?thumb=1&w=1226&h=120&f=webp&q=90" />
        </div>
      </div>
    </div>
  );
};
