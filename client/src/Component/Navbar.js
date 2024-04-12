import React from "react";
import { Menu, Avatar, Typography, Row } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { useAuth } from "State/AuthProvider";

const { Text } = Typography;

const { SubMenu } = Menu;
const Navbar = () => {
    const [cookies, setCookie] = useCookies([]);
    const { logoutUser } = useAuth();
    const authData = cookies["authData"];

    return (
        <Menu
            mode="horizontal"
            style={{
                justifyContent: "right",
                alignItems: "center",
                position: "fixed",
                zIndex: 2,
                width:"80vw",
                height:"7vh"
            }}
        >
            <Row
                justify={"center"}
                align={"middle"}
                style={{ flexGrow: 1, textAlign: "center" }}
            >
                <Text type="success" style={{ fontSize: "1.5rem" }}>
                    Light and Grips Equipment Hirers (India) Pvt. Ltd
                </Text>
            </Row>
            <Row justify={"center"} align={"middle"}>
                <Avatar
                    icon={<SettingOutlined />}
                    style={{ backgroundColor: "#000", color: "#fff" }}
                />
            </Row>
            <Row justify={"center"} align={"middle"}>
                <SubMenu
                    icon={
                        <Avatar
                            style={{ backgroundColor: "#000", color: "#fff" }}
                            icon={<UserOutlined />}
                        />
                    }
                    style={{ fontSize: "1rem" }}
                >
                    <Menu.Item key="profile">
                        <UserOutlined /> {authData.name.toUpperCase()}
                    </Menu.Item>
                    <Menu.Item key="logout" onClick={() => logoutUser()}>
                        Logout
                    </Menu.Item>
                </SubMenu>
            </Row>
        </Menu>
    );
};

export default Navbar;
