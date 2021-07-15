import React from 'react';
import { Form, Input, Row, Col, DatePicker, Space, Select, Card } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import CustomTitle from '../../elements/Forms/UserFormStyle';

const { TextArea } = Input;
const { Option } = Select;

const Projects = () => (
  <div>
    <Card>
      {/* emloyment history */}
      <CustomTitle>Title</CustomTitle>
      <Row gutter={[24, 40]}>
        <Col span={12}>
          <Input placeholder="Project Title" />
        </Col>
      </Row>
      {/* project description*/}
      <CustomTitle>Project Description</CustomTitle>
      <Row gutter={[24, 40]}>
        <Col span={24}>
          <TextArea
            placeholder="Describe your project"
            autoSize={{ minRows: 6, maxRows: 6 }}
          />
        </Col>
        <Col span={12}>
          <Input placeholder="Technologies used" />
        </Col>
        <Col span={12}>
          <div style={{ marginBottom: 16 }}>
            <Input
              addonBefore="http://"
              addonAfter=".io"
              defaultValue="mysite"
            />
          </div>
        </Col>
      </Row>
    </Card>
  </div>
);

export default Projects;
