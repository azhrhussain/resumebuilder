import React from 'react';
import { Form, Input, Row, Col, DatePicker, Space, Card } from 'antd';
import CustomTitle from '../components/UserFormStyle';
import StyledCard from '../components/CardStyle';

const { TextArea } = Input;

const EmploymentDetails = () => (
  <div>
    <StyledCard title="Employment History">
      {/* emloyment history */}
      <CustomTitle>Company:</CustomTitle>
      <Row gutter={[16, 16]}>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Company Name" />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Company Location" />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Job title" />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Space direction="horizontal">
            <DatePicker />
            <DatePicker />
          </Space>
        </Col>
      </Row>
      {/* description*/}
      <CustomTitle>Description</CustomTitle>
      <TextArea
        placeholder="Describe your job"
        autoSize={{ minRows: 6, maxRows: 6 }}
      />
    </StyledCard>
  </div>
);

export default EmploymentDetails;
