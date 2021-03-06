import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { Image } from "react-bootstrap";
import {
  Container,
  Button,
  Modal,
  Row,
  Col,
  Dropdown,
  Table,
  Form,
  Pagination,
} from "react-bootstrap";
import TableImg from "../../Assets/table/mobile.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FiList } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillWarning } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
function ListedItem() {
  const [smShow, setSmShow] = useState(false);
  const onHide = () => setSmShow(false);
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Box id="Dashboard">
      <Container>
        <Row m={0}>
          <Col lg={6} md={5} sm={12} xs={12}>
            <Box className="Search_input_ListItem p-0">
              <AiOutlineSearch className="search_icon" />
              <Form className="form-inline  md-form form-sm mt-0 w-100 position-relative">
                <input
                  className="form-control form-control-sm ml-3 w-100 border-0 position-relative"
                  id="search-bar"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <FiList className="list_icon" />
              </Form>
            </Box>
          </Col>
          <Col lg={6} md={7} sm={12} xs={12}>
            <Row>
              <Col md="auto" sm={12} xs={12} className="p-0">
                <Box display="flex" justifyContent="space-around" mb={2}>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      size="sm"
                      id="dropdown-basic"
                    >
                      Update status
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-0">
                      <Dropdown.Item>
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="Time"
                            className="form-check-input"
                          />
                          Set Online
                        </label>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <label className="form-check-label ">
                          <input
                            type="radio"
                            name="Time"
                            className="form-check-input"
                          />
                          Set Offline
                        </label>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Box className="edit-button">
                    <AiOutlineEdit />
                    Update Item
                  </Box>
                </Box>
              </Col>
              <Col md="auto" className="p-0">
                <Box display="flex" justifyContent="space-around" mb={2}>
                  <Box
                    className="Delete-button"
                    onClick={() => setSmShow(true)}
                  >
                    <FaRegTimesCircle />
                    Delete Product
                  </Box>
                  <Modal
                    id="Delete-Modal"
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    centered
                  >
                    <Modal.Body>
                      <Box display="flex">
                        <AiFillWarning size={30} />
                        <Box className="modal-para">
                          Are you sure to want to delete this "Grasser" item?
                        </Box>
                      </Box>
                      <Box display="flex" justifyContent="flex-end">
                        <Button className="Cancel" onClick={onHide}>
                          Cancel
                        </Button>
                        <Button className="Delete">Yes, Delete it</Button>
                      </Box>
                    </Modal.Body>
                  </Modal>
                  <Link to="/productDetail" className="ProductDetailButton">
                    <Box className="Add-button">
                      <IoIosAddCircleOutline className="Add_Svg" />
                      Add Product
                    </Box>
                  </Link>
                </Box>
              </Col>
            </Row>
          </Col>
        </Row>
        <Box mb={4}>
          <Box className="Dashboard-Table ">
            <Table className="Inner_Dashboard_table table-md table-responsive">
              <thead className="Table-header">
                <tr>
                  <td colSpan="2"></td>
                  <td>Product Name</td>
                  <td>Quantity</td>
                  <td>Remaining</td>
                  <td>Price</td>
                  <td>Discount</td>
                  <td>Bin Location</td>
                  <td>Product ID</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>6</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>8</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>7</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>6</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>6</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>John Doe</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>$200</td>
                  <td>BS2563BS</td>
                  <td>live</td>
                </tr>
              </tbody>
            </Table>
            <Box
              display="flex"
              justifyContent="flex-end"
              bgcolor="#fff"
              pb={2}
              className="Table-pagination"
            >
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Next />
              </Pagination>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default ListedItem;
