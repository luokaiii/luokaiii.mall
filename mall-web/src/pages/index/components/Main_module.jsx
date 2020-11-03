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

  if (type == 'picture') {
    return (
      <div className="main-module_item main-module_item_picture">
        <img src={item.cover} />
      </div>
    );
  }

  return (
    <div className="main-module_item" key={item.title}>
      <div className="main-module_item_cover">
        <img src={item.cover} alt="" />
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
        {data.list.map((item, index) => (
          <RenderItem key={index} item={item} />
        ))}
      </div>
      <div className="main-module_footer">
        <div>
          <img src={data.footer} alt="" />
        </div>
      </div>
    </div>
  );
};
