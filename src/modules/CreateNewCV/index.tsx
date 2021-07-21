import React from 'react';
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Form,
  Input,
  Select,
  Divider,
  Upload,
  message,
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ContactForm from '../../elements/Forms/ContactForm';
import EmploymentDetails from '../../elements/Forms/EmploymentDetails';
import Projects from '../../elements/Forms/Projects';
import Education from '../../elements/Forms/Education';
import Certification from '../../elements/Forms/Certification';
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
          <Row gutter={[8, 48]}>
            <Col
              xl={{ span: 24, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              md={{ span: 20, offset: 2 }}
              sm={{ span: 22, offset: 1 }}
              xs={{ span: 22, offset: 1 }}
            >
              <Col lg={{ span: 12 }}>
                <Form
                  name="register"
                  initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                  }}
                  scrollToFirstError
                >
                  {/* profile */}

                  {/* contact */}
                  <ContactForm></ContactForm>
                </Form>
                <Form>
                  {/* employment */}
                  <Divider style={{ background: '#0050b3' }}></Divider>
                  <EmploymentDetails></EmploymentDetails>
                  {/* projects */}
                  <Divider style={{ background: '#0050b3' }}></Divider>
                  <Projects></Projects>
                  {/* education */}
                  <Divider style={{ background: '#0050b3' }}></Divider>
                  <Education></Education>
                  <Divider style={{ background: '#0050b3' }}></Divider>
                  <Certification />
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
