import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import Guideline from "../DefaultScreen/Guideline";
import Inputs from "../DefaultScreen/Inputs";
import Heading from "../DefaultScreen/Heading";
function Setting() {
  return (
    <Box id="Dashboard">
      <Container>
        <Heading Heading="Update Password" align="left" />
        <Row>
          <Col md={6} lg={8}>
            <Box className="Setting" bgcolor="#fff">
              <Inputs
                type="password"
                FormLabel="Enter Old Password"
                placeholder="******** "
              />

              <Inputs
                type="password"
                FormLabel="New Password"
                placeholder="******** "
              />

              <Inputs
                type="password"
                FormLabel="Confirm New Password"
                placeholder="******** "
              />
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              mt={3}
              mb={3}
              className="Password_button"
            >
              <Button className="Cancel">Cancel</Button>
              <Button className="Send">Save </Button>
            </Box>
          </Col>
          <Col md={6} lg={4}>
            <Guideline />
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

export default Setting;
