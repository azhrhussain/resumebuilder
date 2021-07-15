import React from 'react';
import { Form, Input, Row, Col, DatePicker, Space, Card } from 'antd';
import CustomTitle from '../../elements/Forms/UserFormStyle';

const { TextArea } = Input;

const EmploymentDetails = () => (
  <div>
    <Card>
      {/* emloyment history */}
      <CustomTitle>Company:</CustomTitle>
      <Row gutter={[24, 40]}>
        <Col span={12}>
          <Input placeholder="Company Name" />
        </Col>
        <Col span={12}>
          <Input placeholder="Company Location" />
        </Col>
        <Col span={12}>
          <Input placeholder="Job title" />
        </Col>
        <Col span={12}>
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
    </Card>
  </div>
);

export default EmploymentDetails;
