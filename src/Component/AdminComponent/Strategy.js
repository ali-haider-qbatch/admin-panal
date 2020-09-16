import React from "react";
import Box from "@material-ui/core/Box";
import { Container, Row, Col, Dropdown, Form } from "react-bootstrap";
import Guideline from "../DefaultScreen/Guideline";
import Inputs from "../DefaultScreen/Inputs";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Heading from "../DefaultScreen/Heading";
function Strategy() {
  return (
    <Box id="Dashboard">
      <Container>
        <Heading Heading="Set Strategy" align="left" />
        <Row>
          <Col md={8}>
            <Box bgcolor="#fff" p={2.5}>
              <Row>
                <Col md={6}>
                  <Form className="Strategy-Form">
                    <Box mb={6}>
                      <Inputs
                        type="text"
                        FormLabel="Strategy Name"
                        placeholder="New Year"
                      />
                    </Box>
                    <Box mb={6}>
                      <span className="Labels-font">
                        <Form.Label>Set Total Items</Form.Label>
                      </span>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="light"
                          className="Strategy w-100"
                        >
                          100
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Box>
                    <span className="Labels-font">
                      <Form.Label>Lists</Form.Label>
                    </span>
                    <Row>
                      <Col md={4} className="pr-0">
                        <Form.Control
                          className="Strategy_number"
                          type="email"
                          placeholder="25"
                        />
                      </Col>
                      <Col md={8} className="pr-0 mt-2 mb-2">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="light"
                            className="Strategy w-100"
                          >
                            100
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                      <Col md={4} className="pr-0">
                        <Form.Control
                          className="Strategy_number"
                          type="email"
                          placeholder="25"
                        />
                      </Col>
                      <Col md={8} className="pr-0 mt-2 mb-2">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="light"
                            className="Strategy w-100"
                          >
                            100
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                      <Col md={4} className="pr-0">
                        <Form.Control
                          className="Strategy_number"
                          type="email"
                          placeholder="25"
                        />
                      </Col>
                      <Col md={8} className="pr-0 mt-2 mb-2">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="light"
                            className="Strategy w-100"
                          >
                            100
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                    <Box className="Add_button">
                      <AiOutlinePlus />
                      Add Button
                    </Box>
                  </Form>
                </Col>
                <Col md={6}>
                  <Box className="Shuffling">
                    <small className="OrderId">Shuffling Period</small>
                    <Form.Check type="radio" label="Every 1 hour" name="Time" />
                    <Form.Check type="radio" label="Every 2 Hour" name="Time" />
                    <Link className="Custom-link">Set Custom</Link>
                    <Box className="Hours-Input">
                      <Form.Control
                        className="Strategy_number"
                        type="email"
                        placeholder="5 Hours"
                      />
                    </Box>
                  </Box>
                </Col>
              </Row>
            </Box>
            <div className="Strategy-Button">
              <button mr="2" type="button" className="Cancel btn btn-primary">
                Cancel
              </button>
              <button type="button" className="Send btn btn-primary">
                Send
              </button>
            </div>
          </Col>
          <Col md={4}>
            <Guideline />
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
export default Strategy;
