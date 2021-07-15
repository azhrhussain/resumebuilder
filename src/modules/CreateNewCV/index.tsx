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
} from 'antd';
import CustomTitle from '../../elements/Forms/UserFormStyle';
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
          <Row gutter={16}>
            <Col span={24}>
              <Col span={12}>
                <Divider>
                  <h1 style={{ textAlign: 'center', padding: '1rem' }}>
                    Personal Details
                  </h1>
                </Divider>
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
                  <Divider>
                    <h1 style={{ textAlign: 'center', padding: '1rem' }}>
                      Employment History
                    </h1>
                  </Divider>
                  <EmploymentDetails></EmploymentDetails>
                  {/* projects */}
                  <Divider>
                    <h1 style={{ textAlign: 'center', padding: '1rem' }}>
                      Projects
                    </h1>
                  </Divider>
                  <Projects></Projects>
                  {/* education */}
                  <Divider>
                    <h1 style={{ textAlign: 'center', padding: '1rem' }}>
                      Education
                    </h1>
                  </Divider>
                  <Education></Education>
                  <Divider>
                    <h1 style={{ textAlign: 'center', padding: '1rem' }}>
                      Certification
                    </h1>
                  </Divider>
                  <Certification></Certification>
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
