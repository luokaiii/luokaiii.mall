import React from 'react';

import './Footer.less';

export default () => {
  return (
    <div>
      <div className="content footer-comp">
        <div className="footer-comp_top">
          <ul>
            <li>预约维修服务</li>
            <li>7天无理由退货</li>
            <li>15天免费换货</li>
            <li>满99包邮</li>
            <li>520余家售后网点</li>
          </ul>
        </div>
        <div className="footer-comp_content">
          <div>
            <dl>
              <dt>帮助中心</dt>
              <dd>账户管理</dd>
              <dd>购物指南</dd>
              <dd>订单操作</dd>
            </dl>
            <dl>
              <dt>服务支持</dt>
              <dd>售后政策</dd>
              <dd>自助服务</dd>
              <dd>相关下载</dd>
            </dl>
            <dl>
              <dt>线下门店</dt>
              <dd>小米之家</dd>
              <dd>服务网点</dd>
              <dd>授权体验店</dd>
            </dl>
            <dl>
              <dt>关于小米</dt>
              <dd>了解小米</dd>
              <dd>加入小米</dd>
              <dd>企业社会责任</dd>
              <dd>投资者关系</dd>
              <dd>投诉举报</dd>
            </dl>
            <dl>
              <dt>关注我们</dt>
              <dd>新浪微博</dd>
              <dd>官方微信</dd>
              <dd>联系我们</dd>
              <dd>公益基金会</dd>
            </dl>
            <dl>
              <dt>特色服务</dt>
              <dd>F码通道</dd>
              <dd>礼物码</dd>
              <dd>防伪查询</dd>
            </dl>
          </div>
          <div className="footer-comp_content_list">右边联系电话：缺省</div>
        </div>
      </div>
      <div className="footer-text-view">
        <div className="content footer-text"></div>
      </div>
    </div>
  );
};
