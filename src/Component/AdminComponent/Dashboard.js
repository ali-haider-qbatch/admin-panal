import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import {
  Container,
  Row,
  Col,
  Table,
  Image,
  Dropdown,
  Modal,
  Button,
} from "react-bootstrap";
import { GiPaperBoat } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { TiTimes } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { FiList } from "react-icons/fi";
import TableImg from "../../Assets/table/mobile.png";
import { FaRegTimesCircle } from "react-icons/fa";
import "date-fns";
import { ImCheckmark2 } from "react-icons/im";
import { BiCalendar } from "react-icons/bi";
import { VscTasklist } from "react-icons/vsc";
import { FaRegEnvelope } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import Background from "../../Assets/Modal/PickListTop.svg";
import { AiOutlinePrinter } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 140,
  },
}));
function Dashboard() {
  const [smShow, setSmShow] = useState(false);
  const onHide = () => setSmShow(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box id="Dashboard">
        <Container>
          <Row>
            <Col md="auto" sm={12} xs={12}>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="filters">
                  <BiCalendar className="Button-icon" /> Filter By Date
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md="auto">
              <Dropdown>
                <Dropdown.Toggle variant="light" className="filters">
                  <VscTasklist className="Button-icon" />
                  Filter By Product
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md="auto">
              <Dropdown>
                <Dropdown.Toggle variant="light" className="filters">
                  <FaRegEnvelope className="Button-icon" /> Filter By Customer
                  Email
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md="auto">
              <Box>
                <Dropdown class="Button-drop">
                  <Dropdown.Toggle variant="light" className="filters">
                    <TiUser className="Button-icon" /> Filter By Customer Name
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Box>
            </Col>
            <Col md="auto">
              <Box className="edit-button">FILTER NOW</Box>
            </Col>
          </Row>
          <Box mt={4} className="MainBoard">
            <Row m={0}>
              <Col md={4}>
                <Box className="Inner-Detail border-right">
                  <span className="inner-svg">
                    <GiPaperBoat size={15} />
                  </span>
                  <h1 className="mt-1 font-weight-bold">10</h1>
                  <small className="Caption">TODAY PICKUP</small>
                </Box>
              </Col>
              <Col md={4}>
                <Box className="Inner-Detail border-right">
                  <span className="inner-svg">
                    <HiOutlineCurrencyDollar size={15} />
                  </span>
                  <h1 className="mt-1 font-weight-bold">50</h1>
                  <small className="Caption">EARNED TODAY</small>
                </Box>
              </Col>
              <Col md={4}>
                <Box className="Inner-Detail">
                  <span className="inner-svg">
                    <TiTimes size={15} />
                  </span>
                  <h1 className="mt-1 font-weight-bold">3000</h1>
                  <small className="Caption">CANCELLED TODAY </small>
                </Box>
              </Col>
            </Row>
          </Box>
          <Box mt={2} mb={2}>
            <Row>
              <Col md={8}>
                <Box className="Search_input">
                  <AiOutlineSearch className="search_icon" />
                  <form class="form-inline  md-form form-sm mt-0 w-100 position-relative">
                    <input
                      class="form-control form-control-sm ml-3 w-100 border-0 position-relative"
                      id="search-bar"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <FiList className="list_icon" />
                  </form>
                </Box>
              </Col>
              <Col md="auto">
                <Box className="Delete-button">
                  <FaRegTimesCircle />
                  Delete Product
                </Box>
              </Col>
              <Col md="auto">
                <Box className="edit-button" onClick={() => setSmShow(true)}>
                  <ImCheckmark2 />
                  Create order
                </Box>
                <Modal
                  id="Delete-Modal"
                  size="md"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                  centered
                >
                  <Modal.Body className="p-0">
                    <Image src={Background} className="w-100" />
                    <Box className="Inner-Body">
                      <Box className="" mt={2} mb={5} textAlign="center">
                        <h4 className="m-0 mt-1">Details of Items Pickup</h4>
                        <small className="OrderId">Order ID #1499C56</small>
                      </Box>
                      <Box
                        className="Amount_Detail"
                        display="flex"
                        flexDirection="row"
                      >
                        <Box className="Amount">
                          <small className="OrderId">amount to be paid</small>
                          <small>$800</small>
                        </Box>
                        <Box className="Amount">
                          <small className="OrderId">Date of Pickup</small>
                          <small>Aug, 14, 2020</small>
                        </Box>
                      </Box>
                      <Box className="summary mt-4 " mx={2}>
                        <small className="OrderId">SUMMARY</small>
                        <Box className="Inner_Summary">
                          <Box display="flex" justifyContent="space-between">
                            <Box>
                              <small className="item">Grasser</small>
                              <small>2</small>
                            </Box>
                            <Box>
                              <small>$600</small>
                            </Box>
                          </Box>
                          <Box display="flex" justifyContent="space-between">
                            <Box>
                              <small className="item">Grasser</small>
                              <small>2</small>
                            </Box>
                            <Box>
                              <small>$200</small>
                            </Box>
                          </Box>
                          <hr />
                          <Box display="flex" justifyContent="space-between">
                            <small className="font-weight-bold">
                              Amount Paid
                            </small>
                            <small className="font-weight-bold">$800</small>
                          </Box>
                        </Box>
                      </Box>
                      <Box display="flex" justifyContent="flex-end" mt={3}>
                        <Button className="Cancel" onClick={onHide}>
                          Cancel
                        </Button>
                        <Box className="Print_Button">
                          <AiOutlinePrinter className="mr-1" />
                          Print Pick List
                        </Box>
                      </Box>
                    </Box>
                  </Modal.Body>
                </Modal>
              </Col>
            </Row>
          </Box>
          <Box className="Dashboard-Table">
            <Table className="Inner_Dashboard_table table-md table-responsive">
              <thead className="Table-header">
                <tr>
                  <td colspan="2"></td>
                  <td>Reservation Id</td>
                  <td>quantity</td>
                  <td>Customer Name</td>
                  <td>Bin Location</td>
                  <td>Expire Date/Time</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Image className="tableImg" src={TableImg} />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>Thornton</td>
                  <td>johndoe@gmail.com</td>
                  <td>@fat</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
                <tr>
                  <td>
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
                </tr>
              </tbody>
            </Table>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
export default Dashboard;
