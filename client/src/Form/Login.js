import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Typography } from "antd";
const { Text, Title } = Typography;
const Login = () => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                style={{
                    width: "30%",
                }}
                onFinish={onFinish}
            >
                <Row justify={"center"}>
                    <Text type="success" style={{fontSize:"3rem"}}>FIMS</Text>
                </Row>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember"  noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;
