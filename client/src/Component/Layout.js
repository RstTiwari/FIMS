import React from "react";
import { Layout, Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const { Header, Sider, Content } = Layout;

const HomeLayout = ({ children }) => {
    return (
        <Row style={{ minHeight: "100vh" }}>
            <Col width="20vw" style={{ minHeight: "100vh" }}>
                <Sidebar />
            </Col>
            <Col style={{ width: "80vw" }}>
                <Navbar />
                {Outlet}
            </Col>
        </Row>
    );
};

export default HomeLayout;
