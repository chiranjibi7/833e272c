import React from 'react'
import { Layout, Tooltip} from "antd";
import { IoCallOutline, IoArchiveOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const { Header} = Layout;

function Navbar() {
  return (
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
  )
}

export default Navbar