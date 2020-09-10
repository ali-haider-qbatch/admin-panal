import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import Guideline from "../DefultScreen/Guideline";
import Inputs from "../DefultScreen/Inputs";
function Setting() {
  return (
    <React.Fragment>
      <Box id="Dashboard">
        <Container>
          <h3 className="font-weight-bold">Update Password</h3>
          <Row>
            <Col md={6} lg={8}>
              <Box className="Setting">
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
    </React.Fragment>
  );
}

export default Setting;
