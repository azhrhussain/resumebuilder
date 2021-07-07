import React from "react";
import { Layout, Breadcrumb, Row, Col, Form } from "antd";
import { Link } from "react-router-dom";
// import ProfileCP from 'components/forms/profileInfo/Index';
// import ExperienceCP from 'components/forms/experience/Experience';
// import ProjectCP from 'components/forms/Project';
// import EducationCP from 'components/forms/Education';
// import CertificationCP from 'components/forms/Certification';
// import SkillsCP from 'components/forms/Skills';
// import ReferenceCP from 'components/forms/Reference';

const { Header, Content, Footer } = Layout;

const CreateNewCV = () => (
  <div className="main">
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>CreateNew</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          <Row gutter={16}>
            <Col span={24}>
              <Form layout="vertical">
                <Col span={24}>
                  <h2 className="heading-secondary">Projects</h2>
                </Col>
              </Form>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>CV Builder</Footer>
    </Layout>
  </div>
);

export default CreateNewCV;
