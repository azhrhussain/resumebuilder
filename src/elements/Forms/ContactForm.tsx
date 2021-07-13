import React from 'react';
import CustomForm from '../../elements/Forms/UserFormStyle';
import { Form, Input, Row, Col } from 'antd';

const ContactForm = () => (
  <div>
    <CustomForm>Contact:</CustomForm>
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>
    </Row>
  </div>
);

export default ContactForm;
