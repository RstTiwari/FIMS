import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faAdd } from "@fortawesome/free-solid-svg-icons";

const PageHeader = ({
    title,
    subTitle,
    addRoute,
    localDataKey,
    cancelRoute,
    refresh,
}) => {
    const windowWidth = window.innerWidth;
    const onCloseClick = () => {
        const route = cancelRoute ? cancelRoute : "dashboard";
        navigate(`/${route}`);
    };
    const navigate = useNavigate();
    const onAddClick = () => {
        navigate(`/add/${addRoute}`);
    };

    const titleSpane = subTitle ? 15 : 20;
    const isLaptop = true;
    const fontSize = isLaptop ? "1.3rem" : "0.7rem";

    return (
        <>
            <Row
                align={"middle"}
                style={{
                    backgroundColor: "#fff",
                    zIndex: 1000,
                    position: "fixed",
                    top: "7vh",
                    width: "85vw",
                }}
            >
                {cancelRoute ? (
                    <Col xs={6} sm={3} md={2} lg={1}>
                        <FontAwesomeIcon
                            icon={faClose}
                            onClick={onCloseClick}
                            style={{
                                cursor: "pointer",
                                fontSize: fontSize,
                                color: "#E0115F",
                            }}
                        />
                    </Col>
                ) : (
                    <Col xs={6} sm={3} md={2} lg={1}></Col>
                )}

                <Col
                    xs={6}
                    sm={12}
                    md={12}
                    lg={titleSpane}
                    style={{
                        fontSize: fontSize,
                        textAlign: "center",
                        color:"orange",
                        fontSize:"2rem"
                    }}
                >
                    {title.toUpperCase()}
                </Col>
                {subTitle && windowWidth >= 992 ? (
                    <>
                        <Col xs={6} sm={12} md={6} lg={8}>
                            <Button
                                icon={<FontAwesomeIcon icon={faAdd} />}
                                onClick={onAddClick}
                                type="link"
                                style={{ fontSize: "1rem" }}
                            >
                                {subTitle.toUpperCase()}
                            </Button>
                        </Col>
                    </>
                ) : (
                    ""
                )}
            </Row>
        </>
    );
};

export default PageHeader;
