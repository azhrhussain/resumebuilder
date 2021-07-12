import React from "react";
import { Form, Input, Button } from "antd";
import { FULL_NAME, FULL_NAME_ERROR_MESSAGE, JOB_TITLE } from "./constants";

const UserForm = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label={FULL_NAME}
      name={FULL_NAME}
      rules={[{ required: true, message: FULL_NAME_ERROR_MESSAGE }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={JOB_TITLE}
      name={JOB_TITLE}
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export default UserForm;
