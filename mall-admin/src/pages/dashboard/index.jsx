import React from 'react';
import { Row, Col, Card, Statistic, Divider } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/charts';

export default () => {
  return (
    <React.Fragment>
      <Row gutter={[24, 24]}>
        <Col lg={6} md={12} xs={24}>
          <Card>
            <Statistic
              title="总销售额"
              value={999999.99}
              prefix="￥"
              valueStyle={{ color: '#cf1322' }}
            />
            <Divider style={{ margin: '12px 0' }} />
            <div>日均销售 ￥50000</div>
          </Card>
        </Col>
        <Col lg={6} md={12} xs={24}>
          <Card>
            <Statistic
              title="总用户数"
              value={1024}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="人"
            />
            <Divider style={{ margin: '12px 0' }} />
            <div>今日新增 200</div>
          </Card>
        </Col>
        <Col lg={6} md={12} xs={24}>
          <Card>
            <Statistic title="支付笔数" value={802} suffix="单" />
            <Divider style={{ margin: '12px 0' }} />
            <div>连起来可绕大拇指一圈</div>
          </Card>
        </Col>
        <Col lg={6} md={12} xs={24}>
          <Card>
            <Statistic.Countdown
              title="双十一倒计时"
              value={Date.now() + 1000 * 30}
              format="D 天 H 时 m 分 s 秒"
            />
            <Divider style={{ margin: '12px 0' }} />
            <div>开干！</div>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Line
              data={[
                { date: '10.14', value: 34 },
                { date: '10.15', value: 34 },
                { date: '10.16', value: 21 },
                { date: '10.17', value: 35 },
                { date: '10.18', value: 26 },
                { date: '10.19', value: 37 },
                { date: '10.20', value: 32 },
                { date: '10.21', value: 64 },
                { date: '10.22', value: 27 },
                { date: '10.23', value: 84 },
              ]}
              height={400}
              xField="date"
              yField="value"
              point={{ size: 5, shape: 'diamond' }}
              label={{ style: { fill: '#aaa' } }}
            />
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
