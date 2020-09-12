import React from "react";
import Box from "@material-ui/core/Box";
import { Container, Row, Col, Table, Dropdown, Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FiList } from "react-icons/fi";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { BiCalendar } from "react-icons/bi";
import { VscTasklist } from "react-icons/vsc";
import { FaRegEnvelope } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
function Dashboard() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md="auto">
              <Dropdown>
                <Dropdown.Toggle variant="light" className="filters">
                  <VscTasklist className="Button-icon" /> Filter By Product
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
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
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
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
          <Box mt={2} mb={2}>
            <Row>
              <Col md={12}>
                <Box className="Search_input">
                  <AiOutlineSearch className="search_icon" />
                  <Form class="form-inline  md-form form-sm mt-0 w-100 position-relative">
                    <input
                      class="form-control form-control-sm ml-3 w-100 border-0 position-relative"
                      id="search-bar"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <FiList className="list_icon" />
                  </Form>
                </Box>
              </Col>
            </Row>
          </Box>
          <Box className="Dashboard-Table">
            <Table className="Inner_Dashboard_table table-md table-responsive">
              <thead className="Table-header">
                <tr>
                  <td></td>
                  <td>Order Id</td>
                  <td>Number of items</td>
                  <td>Customer Name</td>
                  <td>Customer Email</td>
                  <td>Bin Location</td>
                  <td>Pickup Date/Time</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>BS2563BS</td>
                  <td>6</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>Thornton</td>
                  <td>johndoe@gmail.com</td>
                  <td>@fat</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>8</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>BS2563BS</td>
                  <td>7</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>6</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>6</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>John Doe</td>
                  <td>6/04/2017, 10:30</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>BS2563BS</td>
                  <td>5</td>
                  <td>John Doe</td>
                  <td>johndoe@gmail.com</td>
                  <td>F217</td>
                  <td>6/04/2017, 10:30</td>
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
