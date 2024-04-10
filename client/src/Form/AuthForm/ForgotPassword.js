import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../State/AuthProvider";
const { Text, Title } = Typography;

const ForgotPassword = () => {
    const { loginUser, authApiCall } = useAuth();
    const [otpRecived, setOtpRecived] = useState(false);
    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const onFinish = async (values) => {
        if (otpRecived) {
            values.userId = userId;
            const response = await authApiCall("updatePassword", values);
            if (response.success) {
                loginUser(response);
                navigate("/login");
            }
        } else {
            const response = await authApiCall("forgetPassword", values);
            if (response.success) {
                setOtpRecived(true);
                setUserId(response.result ? response.result.userId : "");
                setEmail(response.result ? response.result.email : "");
            }
        }
    };
    return (
        <Form
            name="normal_login"
            className="login-form"
            layout="vertical"
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
            {!otpRecived ? (
                <>
                    <Row justify={"center"}>
                        Enter Your regitred mail to update password
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
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="email"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            SEND OTP
                        </Button>
                    </Form.Item>
                </>
            ) : (
                <>
                    <Row justify={"center"}>Otp sended email {email}</Row>
                    <Form.Item
                        name="otp"
                        label="OTP"
                        rules={[
                            {
                                required: true,
                                message: "Please input your otp!",
                            },
                        ]}
                    >
                        <Input placeholder="OTP" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("confirmPassword") ===
                                            value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "The two passwords do not match!"
                                        )
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        label={"Confirm Password"}
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "The two passwords do not match!"
                                        )
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input
                            type="password"
                            placeholder="Reenter the Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Update Password
                        </Button>
                    </Form.Item>
                </>
            )}
        </Form>
    );
};
export default ForgotPassword;
