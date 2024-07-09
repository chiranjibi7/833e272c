import React, { useState, useEffect } from "react";
import { IoCallOutline, IoArchiveOutline } from "react-icons/io5";
import { Layout, Menu, Button, theme, Typography, Avatar, Badge, Row, Col, Dropdown } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  
  const navigate = useNavigate();

  return (
    <Layout>
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
      <Layout>
        <Header
         className="block md:hidden"
          theme="dark"
          style={{
            padding: 0,
            color: "white",
          }}
        >
        </Header>
        <div
          className={
            collapsed ? "content-transition-wide" : "content-transition-narrow"
          }
        >
          <Content>
            <Outlet />
          </Content>
        </div>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
