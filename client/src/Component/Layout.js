import React from "react";
import { Layout, Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const { Header, Sider, Content } = Layout;

const HomeLayout = ({ userName, role }) => {
    return (
        <Row style={{ minHeight: "100vh" }}>
            <Col width="20vw" style={{ minHeight: "100vh" }}>
                <Sidebar />
            </Col>
            <Col style={{ width: "80vw" }}>
                <Navbar userName={userName} role={role} />
                <Row style={{ padding: "1rem", overflowY: "auto" }}>
                    <Outlet />
                </Row>
            </Col>
        </Row>
    );
};

export default HomeLayout;
