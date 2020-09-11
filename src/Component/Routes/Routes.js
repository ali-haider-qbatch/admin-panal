import React, { Component } from "react";
import SignIn from "../LogInScreens/SignIn";
import ForgetPassword from "../LogInScreens/ForgetPassword";
import EmailSent from "../LogInScreens/EmailSent";
import Dashboard from "../AdminComponent/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import ListedItem from "../AdminComponent/ListedItem";
import Header from "../DefultScreen/Header";
import Notification from "../AdminComponent/Notification";
import Setting from "../AdminComponent/Setting";
import ProductDetail from "../AdminComponent/ProductDetail";
import Orders from "../AdminComponent/Orders";
import Strategy from "../AdminComponent/Strategy";
export class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: true,
    };
  }
  toggleSideBar = () => {
    this.setState((state) => {
      return { sideBar: !state.sideBar };
    });
  };
  routes = [
    {
      path: "/",
      exact: true,
      header: () => <></>,
      sidebar: () => <></>,
      main: () => <SignIn />,
    },
    {
      path: "/forget_password",
      header: () => <></>,
      sidebar: () => <></>,
      main: () => <ForgetPassword />,
    },
    {
      path: "/email_sent",
      header: () => <></>,
      sidebar: () => <></>,
      main: () => <EmailSent />,
    },
    {
      path: "/dashboard",
      header: () => <Header toggleSideBar={this.toggleSideBar} />,
      sidebar: () => <Sidebar sideBar={this.state.sideBar} />,
      main: () => <Dashboard />,
    },
    {
      path: "/ListedItem",
      header: () => <Header toggleSideBar={this.toggleSideBar} />,
      sidebar: () => <Sidebar sideBar={this.state.sideBar} />,
      main: () => <ListedItem />,
    },
    {
      path: "/Orders",
      header: () => <Header toggleSideBar={this.toggleSideBar} />,
      sidebar: () => <Sidebar sideBar={this.state.sideBar} />,
      main: () => <Orders />,
    },
    {
      path: "/Strategy",
      header: () => <Header toggleSideBar={this.toggleSideBar} />,
      sidebar: () => <Sidebar sideBar={this.state.sideBar} />,
      main: () => <Strategy />,
    },
    {
      path: "/Notification",
      header: () => <Header toggleSideBar={this.toggleSideBar} />,
      sidebar: () => <Sidebar sideBar={this.state.sideBar} />,
      main: () => <Notification />,
    },
    {
      path: "/Setting",
      header: () => <Header toggleSideBar={this.toggleSideBar} />,
      sidebar: () => <Sidebar sideBar={this.state.sideBar} />,
      main: () => <Setting />,
    },
    {
      path: "/productDetail",
      header: () => <Header toggleSideBar={this.toggleSideBar} />,
      sidebar: () => <Sidebar sideBar={this.state.sideBar} />,
      main: () => <ProductDetail />,
    },
  ];
  render() {
    return (
      <Router>
        <Switch>
          {this.routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={[<route.header />, <route.sidebar />]}
            />
          ))}
        </Switch>
        <Switch>
          {this.routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                children={<route.main />}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
