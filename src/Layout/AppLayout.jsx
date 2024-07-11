import React, { useState} from "react";
import { Layout} from "antd";
import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const { Header, Content} = Layout;


function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout>
     <Sidebar/>
      <Layout>
       <Navbar/>
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
