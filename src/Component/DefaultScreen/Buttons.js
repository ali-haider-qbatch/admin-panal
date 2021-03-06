import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: props.Name,
    };
  }
  render() {
    return (
      <Link to={this.props.navUrl}>
        <Button id="DashboardButton">{this.state.Name}</Button>
      </Link>
    );
  }
}
export default Buttons;
