import React from 'react';
import { Menu,Row } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,HomeFilled ,Fun} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast,faPerson,faAddressBook,faBoxArchive,faFile} from '@fortawesome/free-solid-svg-icons';
//import { faAddressBook } from '@fortawesome/free-regular-svg-icons'

import homeicon from "../Assets/homeIcon.png"
const { SubMenu } = Menu;

const Sidebar = () => {
    const handleSideBarClick =(e)=>{
     console.log(e);
    }
  return (
      <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100vh", width: "20vw", borderRight: 0 ,textAlign:"left"}}
          onClick={handleSideBarClick}
          theme="dark"
      >
          <Row
              justify={"center"}
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
          <Menu.Item key={"dashbord"} icon ={<HomeFilled/>}>DASHBORD</Menu.Item>
          <SubMenu key="customer" icon={<FontAwesomeIcon icon= {faAddressBook}/>} title="CUSTOMER">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="vehilce" icon={<FontAwesomeIcon icon={faTruckFast} />} title="VEHICLE">
              <SubMenu key="sub3" title="Submenu 1">
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title="Submenu 2">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
          </SubMenu>
          <SubMenu key="crew" icon={<FontAwesomeIcon icon={faPerson} />} title="CREW">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu key="assets" icon={<FontAwesomeIcon icon={faBoxArchive} />} title="ASSETS">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu key="challan" icon={<FontAwesomeIcon icon={faFile} />} title="CHALLAN">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
      </Menu>
  );
};

export default Sidebar;
