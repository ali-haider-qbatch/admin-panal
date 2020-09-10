import React, { Component } from "react";
import { Form } from "react-bootstrap";
export class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
      placeholder: props.placeholder,
      FormLabel: props.FormLabel,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Form className="mt-4">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="font-weight-bold">
              {this.state.FormLabel}
            </Form.Label>
            <Form.Control
              type={this.state.type}
              placeholder={this.props.placeholder}
            />
          </Form.Group>
          {/*
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type={this.state.password} placeholder="Password" />
          </Form.Group> */}
        </Form>
      </React.Fragment>
    );
  }
}

export default Inputs;
