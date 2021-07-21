import React from 'react';
import { Form, Input, Row, Col, DatePicker, Space, Checkbox, Card } from 'antd';
import CustomTitle from '../components/UserFormStyle';
import StyledCard from '../components/CardStyle';

const { TextArea } = Input;
const { RangePicker } = DatePicker;
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const Education = () => (
  <div>
    <StyledCard title="Education">
      {/* emloyment history */}
      <CustomTitle>School program</CustomTitle>
      <Row gutter={[16, 16]}>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="School/University" />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Degree" />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Field of study" />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Space direction="horizontal">
            <RangePicker picker="year" />
          </Space>
        </Col>
      </Row>
      {/* description*/}
      <CustomTitle>Grade</CustomTitle>
      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
        <Row>
          <Col span={8}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
      <CustomTitle>Activities</CustomTitle>
      <Row>
        <Col span={24}>
          <Input placeholder="List your activities" />
        </Col>
      </Row>
      <CustomTitle>Description</CustomTitle>
      <TextArea
        placeholder="Describe your activities"
        autoSize={{ minRows: 6, maxRows: 6 }}
      />
    </StyledCard>
  </div>
);

export default Education;
