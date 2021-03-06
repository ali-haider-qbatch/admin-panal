import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Heading from "../DefaultScreen/Heading";
import Logo from "../DefaultScreen/logo";
import Inputs from "../DefaultScreen/Inputs";
import Buttons from "../DefaultScreen/Buttons";
import { Row, Col } from "react-bootstrap";
export class ForgetPassword extends Component {
  render() {
    return (
      <React.Fragment>
        <Box className="Login-Screen-Header" />
        <Row className="justify-content-md-center justify-content-lg-center  justify-content-sm-center m-0">
          <Col lg={4} md={7} sm={12}>
            <Logo />
            <Heading Heading="Resetting Password" align="center" />
            <Box
              boxShadow={2}
              p={5}
              color="text.primary"
              bgcolor="#fff"
              borderRadius="borderRadius"
            >
              <h6 align="center" className="Login-font">
                Please Enter the Email address to reset the password
              </h6>
              <Inputs
                type="email"
                placeholder="john@gmail.com"
                FormLabel="Email Address"
              />
              <small className="text-danger">Email Don't exit</small>
              <Buttons Name="Send" navUrl={"/email_sent"} />
            </Box>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default ForgetPassword;
