import React from 'react';
import { Form, Input, Row, Col, DatePicker, Space, Card } from 'antd';
import CustomTitle from '../components/UserFormStyle';
import StyledCard from '../components/CardStyle';

const { RangePicker } = DatePicker;

const Certification = () => (
  <div>
    {/* courses */}
    <StyledCard title="Certification">
      <Row gutter={[16, 16]}>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Course Name" />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Institution" />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Space direction="horizontal">
            <RangePicker />
          </Space>
        </Col>
      </Row>
    </StyledCard>
  </div>
);

export default Certification;
