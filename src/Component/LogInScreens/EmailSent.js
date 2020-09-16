import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Heading from "../DefaultScreen/Heading";
import Logo from "../DefaultScreen/logo";
import EmailSvg from "../../Assets/Email Sent/Emailsent.svg";
import Buttons from "../DefaultScreen/Buttons";
import { Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
export class EmailSent extends Component {
  render() {
    return (
      <React.Fragment>
        <Box className="Login-Screen-Header" />
        <Row className="justify-content-md-center justify-content-lg-center justify-content-sm-center m-0">
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
              <Box align="center">
                <Image src={EmailSvg} />
              </Box>
              <p className="instructions">
                Please check the email we have sent this instructions to change
                password
              </p>
              <Buttons Name="Continuous LogIn" navUrl={"/"} />
            </Box>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default EmailSent;
