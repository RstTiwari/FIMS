import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

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
        navigate(`/${cancelRoute}`);
    };
    const navigate = useNavigate();
    const onAddClick = () => {
        navigate(`/${addRoute}`);
    };
    const refreshThePageOnly = (localDataKey) => {
        // removeLocalData(`${localDataKey}`);
    };

    const titleSpane = subTitle ? 15 : addRoute ? 15 : refresh ? 18 : 21;
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
                    width:"85vw",
                }}
            >   
                
                <Col xs={6} sm={3} md={2} lg={2} >
                    <FontAwesomeIcon
                        icon={faBackward}
                        onClick={onCloseClick}
                        style={{
                            cursor: "pointer",
                            fontSize: fontSize,
                            color: "#E0115F",
                        }}
                    />
                </Col>
                <Col
                    xs={6}
                    sm={12}
                    md={12}
                    lg={titleSpane}
                    style={{
                        color: "#4285F4",
                        fontSize: fontSize,
                        textAlign: "left",
                        
                    }}
                >
                    {title.toUpperCase()}
                </Col>
                {refresh ? (
                    <Col xs={6} sm={12} md={6} lg={3}>
                        <Button
                            onClick={() => {
                                refreshThePageOnly(localDataKey);
                            }}
                        >
                            Refresh
                        </Button>
                    </Col>
                ) : (
                    ""
                )}
                {subTitle && windowWidth >= 992 ? (
                    <>
                        <Col xs={6} sm={12} md={6} lg={2}>
                            <Button
                                onClick={onAddClick}
                                type="primary"
                                style={{ fontSize: "0.7rem" }}
                            >
                                {subTitle}
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
