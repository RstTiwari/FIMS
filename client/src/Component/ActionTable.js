import React from "react";
import { BankOutlined, DownOutlined, MoneyCollectFilled, MoneyCollectOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Space, Dropdown, Menu } from "antd";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    FilePdfOutlined,
    RedoOutlined,
    PlusOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";

export const TableAction = ({ params, page, download,entityNo,payment }) => {
    const menuItems = [
        <Menu.Item key="1" style={{fontSize:"0.75rem"}}>
            <Link to={`/read/${page}/${params}`}>
                <EyeOutlined />
                DETAILS
            </Link>
        </Menu.Item>,
        <Menu.Item key="2"  style={{fontSize:"0.75rem"}}>
            <Link to={`/update/${page}/${params}`}>
                {" "}
                <EditOutlined />
                EDIT
            </Link>
        </Menu.Item>,
   
            <Menu.Item key="4"  style={{fontSize:"0.75rem"}}>
            <Link to={`/record/payment/${params}`}>
                {payment ? (
                    <>
                    <BankOutlined />
                RECORD PAYMENT
                    </>
                ):("")}
                
            </Link>
        </Menu.Item>,
    ];

    return (
        <Space size="large" >
            <Dropdown overlay={<Menu>{menuItems}</Menu>} trigger={["click"]}>
                <div style={{fontSize:"2rem",cursor:"pointer"}} >...</div>
            </Dropdown>
        </Space>
    );
};
