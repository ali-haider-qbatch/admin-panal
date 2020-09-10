import React from "react";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { ImHome } from "react-icons/im";
import { VscTasklist } from "react-icons/vsc";
import { HiOutlineBell } from "react-icons/hi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsViewList } from "react-icons/bs";

function Sidebar(props) {
  const open = props.sideBar;

  return (
    <React.Fragment>
      <Box className={open ? "SideBar" : "SideMenu"}>
        <ul className="list-unstyled">
          <li className="dashboard-list">
            <NavLink
              activeClassName="active"
              to="/dashboard"
              className="Dashboard-link"
            >
              <ImHome className="sidebar_Icon" />
              Dashboard
            </NavLink>
          </li>
          <li className="dashboard-list">
            <NavLink
              activeClassName="active"
              to="/listedItem"
              className="Dashboard-link"
            >
              <VscTasklist className="sidebar_Icon" />
              Item listed
            </NavLink>
          </li>
          <li className="dashboard-list">
            <NavLink
              activeClassName="active"
              to="/Strategy"
              className="Dashboard-link"
            >
              <BsViewList className="sidebar_Icon" />
              Strategy
            </NavLink>
          </li>
          <li className="dashboard-list">
            <NavLink
              activeClassName="active"
              to="/Orders"
              className="Dashboard-link"
            >
              <AiOutlineShoppingCart className="sidebar_Icon" />
              Orders
            </NavLink>
          </li>
          <li className="dashboard-list">
            <NavLink
              activeClassName="active"
              to="/Notification"
              className="Dashboard-link"
            >
              <HiOutlineBell className="sidebar_Icon" />
              Notifications
            </NavLink>
          </li>
          <li className="dashboard-list">
            <NavLink
              activeClassName="active"
              to="/Setting"
              className="Dashboard-link"
            >
              <FiSettings className="sidebar_Icon" />
              Setting
            </NavLink>
          </li>
          <li className="dashboard-list">
            <NavLink exact to="/" className="Dashboard-link">
              <RiLogoutBoxLine className="sidebar_Icon" />
              Log Out
            </NavLink>
          </li>
        </ul>
      </Box>
    </React.Fragment>
  );
}

export default Sidebar;