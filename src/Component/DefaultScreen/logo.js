import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import Logo from "../../Assets/Logo/logo.png";
export class logo extends Component {
  render() {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image src={Logo} className="Logo" />
      </Box>
    );
  }
}
export default logo;
