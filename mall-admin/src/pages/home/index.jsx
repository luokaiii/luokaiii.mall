import React from 'react';
import { Form, Input } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default () => {
  return (
    <PageHeaderWrapper
      title="这里是标题"
      content={
        <Form>
          <Form.Item label="商品名称">
            <Input placeholder="请输入商品名称" />
          </Form.Item>
        </Form>
      }
      extraContent="额外内容"
    >
      hello world!
    </PageHeaderWrapper>
  );
};
