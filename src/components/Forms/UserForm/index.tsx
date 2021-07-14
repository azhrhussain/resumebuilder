import React from "react";
import { Form, Input, Button, Col, Row } from "antd";
import Avatar from "../../Avatar";
import {
  FULL_NAME,
  FULL_NAME_ERROR_MESSAGE,
  JOB_TITLE,
  NEXT,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_ERROR,
} from "./constants";

const UserFormStep1 = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label={UPLOAD_IMAGE}
      name={UPLOAD_IMAGE}
      rules={[{ required: false, message: UPLOAD_IMAGE_ERROR }]}
    >
      <Avatar />
    </Form.Item>
    <Row gutter={[24, 16]}>
      <Col span={12}>
        <Form.Item
          label={FULL_NAME}
          name={FULL_NAME}
          rules={[{ required: true, message: FULL_NAME_ERROR_MESSAGE }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label={JOB_TITLE}
          name={JOB_TITLE}
          rules={[{ required: true, message: "Please input your job title!" }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </Row>
  </Form>
);

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export default UserFormStep1;
