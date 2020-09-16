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
      <Form.Group controlId="formBasicEmail" className="mt-4">
        <Form.Label className="font-weight-bold">
          {this.state.FormLabel}
        </Form.Label>
        <Form.Control
          type={this.state.type}
          placeholder={this.props.placeholder}
        />
      </Form.Group>
    );
  }
}

export default Inputs;
