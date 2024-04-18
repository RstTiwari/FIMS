import React, { useState } from "react";
import { useNavigate, use } from "react-router-dom";
import { Menu, Row } from "antd";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    HomeFilled,
    Fun,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTruckFast,
    faPerson,
    faAddressBook,
    faBoxArchive,
    faFile,
} from "@fortawesome/free-solid-svg-icons";
//import { faAddressBook } from '@fortawesome/free-regular-svg-icons'

import homeicon from "../Assets/homeIcon.png";
const { SubMenu } = Menu;
const Sidebar = () => {
    const navigate = useNavigate();

    const handleSideBarClick = (e) => {
        navigate(`/${e.key}`);
    };
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            style={{
                height: "100vh",
                width: "15vw",
                borderRight: 0,
                textAlign: "left",
                position: "fixed",
            }}
            onClick={handleSideBarClick}
            theme="dark"
        >
            <Row
                style={{
                    height: "7vh",
                    backgroundColor: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                }}
            >
                <img
                    src={homeicon}
                    alt="companylogo"
                    style={{
                        width: "2rem",
                    }}
                />
                <h1>FIMS</h1>
            </Row>
            <Menu.Item key={"dashboard"} icon={<HomeFilled />}>
                DASHBORD
            </Menu.Item>
            <Menu.Item
                key="party"
                icon={<FontAwesomeIcon icon={faAddressBook} />}
            >
                PARTY
            </Menu.Item>
            <Menu.Item
                key="vehilce"
                icon={<FontAwesomeIcon icon={faTruckFast} />}
                title="VEHICLE"
            >
                VEHICLE
            </Menu.Item>
            <Menu.Item
                key="crew"
                icon={<FontAwesomeIcon icon={faPerson} />}
                title="CREW"
            >
                CREW
            </Menu.Item>
            <Menu.Item
                key="asset"
                icon={<FontAwesomeIcon icon={faBoxArchive} />}
                title="ASSET"
            >
                ASSET
            </Menu.Item>
            <Menu.Item key="challan" icon={<FontAwesomeIcon icon={faFile} />}>
                CHALLAN
            </Menu.Item>
        </Menu>
    );
};

export default Sidebar;
