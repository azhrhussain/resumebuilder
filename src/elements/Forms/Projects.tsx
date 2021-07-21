import React from 'react';
import { Form, Input, Row, Col, DatePicker, Space, Select, Card } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import CustomTitle from '../components/UserFormStyle';
import StyledCard from '../components/CardStyle';
import Container from '../components/ContainerStyle';

const { TextArea } = Input;
const { Option } = Select;

const Projects = () => (
  <div>
    <StyledCard title="Projects">
      {/* emloyment history */}
      <CustomTitle>Title</CustomTitle>
      <Row>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
        >
          <Input placeholder="Project Title" />
        </Col>
      </Row>
      {/* project description*/}
      <CustomTitle>Project Description</CustomTitle>
      <Row gutter={[16, 0]}>
        <Col span={24}>
          <TextArea
            placeholder="Describe your project"
            autoSize={{ minRows: 6, maxRows: 6 }}
          />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CustomTitle>Technologies</CustomTitle>
          <Input placeholder="Technologies used" />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CustomTitle>Site</CustomTitle>
          <Input placeholder="http://mysite.com" />
        </Col>
        {/* <Col span={12}>
          <div style={{ marginBottom: 16 }}>
            <Input
              addonBefore="http://"
              addonAfter=".io"
              defaultValue=""
            />
          </div>
        </Col> */}
      </Row>
    </StyledCard>
  </div>
);

export default Projects;
