import React, { useState} from "react";
import { IoCallOutline, IoArchiveOutline } from "react-icons/io5";
import { Flex, Layout, Menu,Typography, Tooltip} from "antd";
import { Outlet, useNavigate, NavLink } from "react-router-dom";

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
      <Layout>
        <Header
          style={{
            padding: 0,
            position: "sticky",
            zIndex: 99,
            top: 0,
            width:"100%",
            background: "#319795",
          }}
           className="md:hidden"
        >
          <nav className="mt-5">
            <ul className="flex  items-center justify-center gap-8">
              <li><NavLink to="/">
                <Tooltip title="Feed"><IoCallOutline size={25}/></Tooltip>
              </NavLink></li>
              <li><NavLink to="/archives">
                  <Tooltip title="Archives">
                  <IoArchiveOutline size={25}/>
                  </Tooltip>
              </NavLink></li>
            </ul>
          </nav>
        </Header>
        <div
          className={
            collapsed ? "content-transition-wide" : "content-transition-narrow"
          } 
        >
          <Content>
            <div className="w-full flex items-center justify-center lg:block">
            <Outlet />
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
