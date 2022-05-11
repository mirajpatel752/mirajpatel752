import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox,  Col } from "antd";


const Login = () => {
  const onFinish = (values) => {
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 124,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div style={{display:'flex',justifyContent:"center",alignItems:'center',height:'100vh'}}>
        <Col>
          <Col span={24} >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 24,
                span: 124,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              wrapperCol={{
                offset: 24,
                span: 124,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Col>
      </div>
    </Form>
  );
};

export default Login;
