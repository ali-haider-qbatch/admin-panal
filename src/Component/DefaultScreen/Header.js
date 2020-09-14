import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logo from "../../Assets/Logo/logo.png";
export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="white" expand="lg" className="Box-Shadow  position-fixed">
          <Navbar.Brand className="p-0">
            <Image className="logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={this.props.toggleSideBar}
          />
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
