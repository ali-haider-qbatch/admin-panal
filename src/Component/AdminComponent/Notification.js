import React from "react";
import Box from "@material-ui/core/Box";
import { Container, Form, Button, Modal, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Guideline from "../DefultScreen/Guideline";
import Inputs from "../DefultScreen/Inputs";
import Heading from "../DefultScreen/Heading";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
function Notification() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <Box id="Dashboard">
        <Container>
          <Heading Heading="Add Notification" align="left" />
          <Row>
            <Col md={8}>
              <Box className="Notification">
                <Form>
                  <Inputs
                    type="text"
                    placeholder="Notification Title"
                    FormLabel="Title"
                  />
                  <Form.Group>
                    <Form.Label className="font-weight-bold">
                      Description
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Description of Title"
                    />
                  </Form.Group>
                </Form>
              </Box>
              <Box mt={3} className="Notification-Button">
                <Box>
                  <Button
                    onClick={() => setModalShow(true)}
                    className="Schedule"
                    variant="outline-info"
                  >
                    Schedule send
                  </Button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Box>
                <Box>
                  <Button className="Cancel" mr={2}>
                    Cancel
                  </Button>
                  <Button className="Send">Send</Button>
                </Box>
              </Box>
            </Col>
            <Col md={4}>
              <Guideline />
            </Col>
          </Row>
        </Container>
      </Box>
    </React.Fragment>
  );
}
function MyVerticallyCenteredModal(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  return (
    <Modal
      id="Hours-Modal"
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Box display="flex" flexDirection="column">
          <label class="form-check-label p-2">
            <input type="radio" class="form-check-input" name="Time" />
            In 1 hour
          </label>
          <label class="form-check-label p-2">
            <input type="radio" class="form-check-input" name="Time" />
            In 2 hour
          </label>
          <label class="form-check-label p-2">
            <input type="radio" class="form-check-input" name="Time" />
            Tomorrow Morning (8am)
          </label>
          <label class="form-check-label p-2">
            <input type="radio" class="form-check-input" name="Time" />
            Tomorrow Afternoon (1pm)
          </label>
          <label class="form-check-label p-2">
            <input type="radio" class="form-check-input" name="Time" />
            Custom
          </label>
          <Box display="flex">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
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
              </Grid>
            </MuiPickersUtilsProvider>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
              />
            </form>
          </Box>
        </Box>
      </Modal.Body>
      <Modal.Footer>
        <Button className="Cancel" onClick={props.onHide}>
          Cancel
        </Button>
        <Button className="Send" onClick={props.onHide}>
          Schedule
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: 100,
    fontSize: 12,
  },
}));
export default Notification;
