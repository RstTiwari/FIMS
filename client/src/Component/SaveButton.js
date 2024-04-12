import React from "react";
import { Row, Col, Button,Form } from "antd";
import { useNavigate } from "react-router-dom";

const SaveButton = ({ buttonText, action2, cancelRoute }) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                height: "4rem",
                left: 0,
                width: "85vw",
                backgroundColor: "#f0f0f0",
                zIndex: 100,
                marginLeft:"15vw",
            }}
        >
                    <Row justify={"start"} style={{ margin: "1rem" }}>
                        <Col xs={12} sm={12} md={12} lg={3} xl={6}>
                            <Button type="primary" htmlType={"submit"}>
                                {buttonText.toUpperCase()}
                            </Button>
                        </Col>

                        {action2 ? (
                            <Col xs={12} sm={12} md={12} lg={2} xl={4}>
                                <Button
                                    onClick={() => {
                                        action2();
                                    }}
                                >
                                    SAVE AND DOWNLOAD
                                </Button>
                            </Col>
                        ) : (
                            ""
                        )}
                        {cancelRoute ? (
                            <Col xs={12} sm={12} md={12} lg={2} xl={6}>
                                <Button
                                    danger
                                    onClick={() => {
                                        navigate(`/${cancelRoute}`);
                                    }}
                                >
                                    CANCEL
                                </Button>
                            </Col>
                        ) : (
                            ""
                        )}
                    </Row>
        </div>
    );
};

export default SaveButton;
