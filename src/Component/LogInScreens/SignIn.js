import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Heading from "../DefaultScreen/Heading";
import Logo from "../DefaultScreen/logo";
import Inputs from "../DefaultScreen/Inputs";
import Buttons from "../DefaultScreen/Buttons";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
export class SignIn extends Component {
  render() {
    return (
      <React.Fragment>
        <Box className="Login-Screen-Header" />
        <Row className="justify-content-md-center justify-content-lg-center  justify-content-sm-center m-0">
          <Col lg={4} md={7} sm={12}>
            <Logo />
            <Heading Heading="Sign in to BWD" align="center" />
            <Box
              boxShadow={2}
              p={5}
              color="text.primary"
              bgcolor="#fff"
              borderRadius="borderRadius"
            >
              <h6 align="center" className="Login-font">
                Please Login in Your Account
              </h6>
              <Inputs
                type="email"
                placeholder="john@gmail.com"
                FormLabel="Email Address"
              />
              <Inputs
                type="password "
                placeholder="******"
                FormLabel="Password"
              />
              <Link
                align="right"
                className="Forget-Password"
                to="/forget_password"
              >
                ForgetPassword?
              </Link>
              <Buttons Name="Log In" navUrl={"/dashboard"} />
            </Box>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default SignIn;
