import React from "react";
import { Menu, Avatar, Typography, Row } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
const { Text } = Typography;

const { SubMenu } = Menu;
const userName = "Rohit";
const Navbar = () => {
    return (
        <Menu
            mode="horizontal"
            style={{ justifyContent: "center", alignItems: "center" }}
        >
            <Row
                justify={"center"}
                align={"middle"}
                style={{ flexGrow: 1, textAlign: "center" }}
            >
                <Text type="success" style={{ fontSize: "2.5vh" }}>
                    Light and Grips Equipment Hirers (India) Pvt. Ltd
                </Text>
            </Row>
            <Row justify={"center"} align={"middle"}>
                <Avatar icon={<SettingOutlined />} style={{backgroundColor:"#000" ,color:"#fff"}} />
            </Row>
            <Row justify={"center"} align={"middle"}>
                <SubMenu
                    icon={<Avatar  style={{backgroundColor:"#000" ,color:"#fff"}} icon={<UserOutlined />} />}
                    style={{ fontSize: "1rem" }}
                >
                    <Menu.Item key="profile">
                       <UserOutlined/> {userName.toUpperCase()}
                    </Menu.Item>
                    <Menu.Item key="logout">Logout</Menu.Item>
                </SubMenu>
            </Row>
        </Menu>
    );
};

export default Navbar;
