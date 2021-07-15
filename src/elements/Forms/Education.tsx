import React from 'react';
import { Form, Input, Row, Col, DatePicker, Space, Checkbox, Card } from 'antd';
import CustomTitle from '../../elements/Forms/UserFormStyle';

const { TextArea } = Input;
const { RangePicker } = DatePicker;
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const Education = () => (
  <div>
    <Card>
      {/* emloyment history */}
      <CustomTitle>School program</CustomTitle>
      <Row gutter={[24, 40]}>
        <Col span={12}>
          <Input placeholder="School/University" />
        </Col>
        <Col span={12}>
          <Input placeholder="Degree" />
        </Col>
        <Col span={12}>
          <Input placeholder="Field of study" />
        </Col>
        <Col span={12}>
          <Space direction="horizontal">
            <RangePicker picker="year" />
          </Space>
        </Col>
      </Row>
      {/* description*/}
      <CustomTitle>Grade</CustomTitle>
      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
        <Row>
          <Col span={4} offset={2}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={4}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={4}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={4}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={4}>
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
    </Card>
  </div>
);

export default Education;
