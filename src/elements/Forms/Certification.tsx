import React from 'react';
import { Form, Input, Row, Col, DatePicker, Space, Card } from 'antd';
import CustomTitle from '../../elements/Forms/UserFormStyle';

const { RangePicker } = DatePicker;

const Certification = () => (
  <div>
    {/* courses */}
    <Card>
      <CustomTitle>Certification</CustomTitle>
      <Row gutter={[24, 40]}>
        <Col span={12}>
          <Input placeholder="Course Name" />
        </Col>
        <Col span={12}>
          <Input placeholder="Institution" />
        </Col>
        <Col span={12}>
          <Space direction="horizontal">
            <RangePicker />
          </Space>
        </Col>
      </Row>
    </Card>
  </div>
);

export default Certification;
