import React from 'react'
import { Layout,Menu} from "antd";
import { IoCallOutline, IoArchiveOutline } from "react-icons/io5";
import {useNavigate} from "react-router-dom";

const {Sider} = Layout;

function Sidebar() {
const navigate = useNavigate();
  return (
    <Sider
    collapsed
    width={50}
    style={{
      minHeight: "100vh",
      position: "fixed",
      zIndex: 99,
      left: 0,
      background: "#319795"
    }}
    className="hidden md:block"
  >
    <Menu
      mode="inline"
    style={{
        marginTop:"50px",
        padding:"5px",
        background: "#319795",
        color:"white"
    }}
      defaultSelectedKeys={[window.location.pathname]}
      onClick={({ key }) => {
          navigate(key);
      }}
      items={[
        {
          label: "Feed",
          key: "/",
          icon: <IoCallOutline />,
        },
       
          {
            label: "Archives",
            key: "archives",
            icon: <IoArchiveOutline />,
          },
      ]}
    />
  </Sider>
  )
}

export default Sidebar