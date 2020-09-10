import React from "react";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import UploadPic from "../../Assets/table/mobile.png";
import { Image } from "react-bootstrap";
function ProductDetail() {
  let history = useHistory();
  return (
    <React.Fragment>
      <Box id="Dashboard">
        <Container>
          <Box onClick={() => history.goBack()} className="GoBack">
            <span className="Back-arrow ">
              <IoIosArrowBack size={17} />
            </span>{" "}
            Back to Product
          </Box>
          <Row>
            <Col md={6}>
              <Box mt={2}>
                <h3 className="font-weight-bold">Add Product</h3>
              </Box>
            </Col>
            <Col md={6}>
              <Box
                mt={2}
                mb={2}
                display="flex"
                justifyContent="flex-end"
                className="Buttons"
              >
                <Button className="Cancel" mr={2}>
                  Cancel
                </Button>
                <Button className="Send">Save</Button>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Box className="Title">
                {" "}
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">Title</Form.Label>
                    <Form.Control type="email" placeholder="Title of Product" />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="font-weight-bold">
                      Description
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Product Description  "
                    />
                  </Form.Group>
                </Form>
              </Box>
            </Col>
            <Col md={6}>
              <Box className="Title">
                <h6 className="font-weight-bold">Images</h6>
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <Form.File id="formCheck-api-regular">
                        <Form.File.Label className="label_File">
                          Select PNG,JPG,JPEG,SVG etc
                        </Form.File.Label>
                        <Form.File.Input />
                      </Form.File>
                      <span className="Drop_Box">Drop your photo in box.</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <Image src={UploadPic}></Image>
                  </Col>
                </Row>
              </Box>
            </Col>
            <Col md={6}>
              <Box className="Title">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">Price</Form.Label>
                    <Form.Control type="number" placeholder="$" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">
                      Discount Percentage
                    </Form.Label>
                    <Form.Control type="number" placeholder="%" />
                  </Form.Group>
                </Form>
              </Box>
            </Col>
            <Col md={6}>
              <Box className="Title">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">
                      Quantity
                    </Form.Label>
                    <Form.Control type="number" placeholder="$" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">
                      Bin Location
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Select bin location"
                    />
                  </Form.Group>
                </Form>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default ProductDetail;
