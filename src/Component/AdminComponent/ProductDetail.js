import React from "react";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import UploadPic from "../../Assets/table/mobile.png";
import { Image } from "react-bootstrap";
import Heading from "../DefaultScreen/Heading";
import Inputs from "../DefaultScreen/Inputs";
import Arrow from "../../Assets/Dashboard/arrow.svg";
function ProductDetail() {
  let history = useHistory();
  return (
    <Box id="Dashboard">
      <Container>
        <Box onClick={() => history.goBack()} className="GoBack">
          <Box className="Back-arrow " bgcolor="#fff">
            {/* <IoIosArrowBack size={17} /> */}
            <Image src={Arrow}></Image>
          </Box>
          <span className="font-weight-bold back-product">Back to Product</span>
        </Box>
        <Row>
          <Col md={6}>
            <Box mt={2}>
              <Heading Heading="Add Product" align="left" />
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
            <Box className="Title" bgcolor="#fff">
              <Form>
                <Inputs
                  type="text"
                  placeholder="Title of Product"
                  FormLabel="Title"
                />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="font-weight-bold">
                    Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="Product Description  "
                  />
                </Form.Group>
              </Form>
            </Box>
          </Col>
          <Col md={6}>
            <Box className="Title" bgcolor="#fff">
              <h6 className="font-weight-bold">Images</h6>
              <Row>
                <Col md={8}>
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
                <Col md={4}>
                  <Image src={UploadPic}></Image>
                </Col>
              </Row>
            </Box>
          </Col>
          <Col md={6}>
            <Box className="Title" bgcolor="#fff">
              <Inputs type="number" placeholder="$" FormLabel="Price" />
              <Inputs
                type="number"
                placeholder="%"
                FormLabel="Discount Percentage"
              />
            </Box>
          </Col>
          <Col md={6}>
            <Box className="Title" bgcolor="#fff">
              <Inputs type="number" placeholder="$" FormLabel="Quantity" />
              <Inputs
                type="text"
                placeholder="Select bin location"
                FormLabel="Bin Location"
              />
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
export default ProductDetail;
