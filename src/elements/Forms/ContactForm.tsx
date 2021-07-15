import React from 'react';
import { Form, Input, Row, Col, Card } from 'antd';
import CustomTitle from '../../elements/Forms/UserFormStyle';

const { TextArea } = Input;

const ContactForm = () => (
  <div>
    <Card>
      <CustomTitle>Professional Summary</CustomTitle>
      <TextArea
        placeholder="Describe your profession in a couple of sentences"
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <CustomTitle>Contact:</CustomTitle>
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
      {/* address */}
      <CustomTitle>Address:</CustomTitle>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Input placeholder="City" />
        </Col>
        <Col span={8}>
          <Input placeholder="Province/State" />
        </Col>
        <Col span={8}>
          <Input placeholder="Country" />
        </Col>
      </Row>
      {/* social networks */}
      <CustomTitle>Social networks:</CustomTitle>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Input placeholder="LinkedIn" />
        </Col>
        <Col span={8}>
          <Input placeholder="Stackoverflow" />
        </Col>
        <Col span={8}>
          <Input placeholder="Other" />
        </Col>
      </Row>
    </Card>
  </div>
);

export default ContactForm;
