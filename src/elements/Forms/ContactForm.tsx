import React from 'react';
import { Form, Input, Row, Col, Card } from 'antd';
import CustomTitle from '../components/UserFormStyle';
import StyledCard from '../components/CardStyle';

const { TextArea } = Input;

const ContactForm = () => (
  <div>
    <StyledCard title="Personal Details">
      <CustomTitle>Professional Summary</CustomTitle>
      <TextArea
        placeholder="Describe your profession in a couple of sentences"
        autoSize={{ minRows: 4, maxRows: 6 }}
      />
      <CustomTitle>Contact:</CustomTitle>
      <Row gutter={[16, 0]}>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Form.Item
            name="email"
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
            <Input placeholder="E-mail" />
          </Form.Item>
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input placeholder="Phone number" />
          </Form.Item>
        </Col>
      </Row>
      {/* address */}
      <CustomTitle>Address:</CustomTitle>
      <Row gutter={[16, 16]}>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="City" />
        </Col>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Province/State" />
        </Col>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Country" />
        </Col>
      </Row>
      {/* social networks */}
      <CustomTitle>Social networks:</CustomTitle>
      <Row gutter={[16, 16]}>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="LinkedIn" />
        </Col>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Stackoverflow" />
        </Col>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Other" />
        </Col>
      </Row>
    </StyledCard>
  </div>
);

export default ContactForm;
