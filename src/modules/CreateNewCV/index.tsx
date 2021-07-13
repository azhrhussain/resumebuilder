import React from 'react';
import { Layout, Breadcrumb, Row, Col, Form, Input, Select } from 'antd';
import CustomForm from '../../elements/Forms/UserFormStyle';
import { Link } from 'react-router-dom';
import ContactForm from '../../elements/Forms/ContactForm';
// import ProfileCP from 'components/forms/profileInfo/Index';
// import ExperienceCP from 'components/forms/experience/Experience';
// import ProjectCP from 'components/forms/Project';
// import EducationCP from 'components/forms/Education';
// import CertificationCP from 'components/forms/Certification';
// import SkillsCP from 'components/forms/Skills';
// import ReferenceCP from 'components/forms/Reference';

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const CreateNewCV = () => (
  <div className="main">
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>CreateNew</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Row gutter={16}>
            <Col span={24}>
              <Col span={24}>
                <Form
                  name="register"
                  initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                  }}
                  scrollToFirstError
                >
                  {/* profile */}
                  <CustomForm>Profile</CustomForm>
                  <TextArea
                    placeholder="Your profile here"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                  />
                  {/* contact */}
                  <ContactForm></ContactForm>
                  {/* address */}
                  <CustomForm>Address:</CustomForm>
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
                  <CustomForm>Social networks:</CustomForm>
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
                </Form>
              </Col>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>CV Builder</Footer>
    </Layout>
  </div>
);

export default CreateNewCV;
