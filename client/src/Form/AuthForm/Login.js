import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../State/AuthProvider";
const { Text, Title } = Typography;

const Login = () => {
    const { loginUser, authApiCall } = useAuth();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const response = await authApiCall("login", values);
        if (response.success) {
            loginUser(response);
            navigate("/dashboard");
        }
    };
    return (
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
                <Text type="success" style={{ fontSize: "3rem" }}>
                    FIMS
                </Text>
            </Row>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
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
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" noStyle valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="" onClick={()=>navigate("/forgotPassword")}>
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
    );
};
export default Login;
