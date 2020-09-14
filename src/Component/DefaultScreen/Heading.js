import React, { Component } from "react";
import Box from "@material-ui/core/Box";
export class Heading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Heading: props.Heading,
      align: props.align,
    };
  }
  render() {
    return (
      <React.Fragment>
        <Box mt={1} mb={4}>
          <h3 variant="h4" align={this.props.align}>
            {this.state.Heading}
          </h3>
        </Box>
      </React.Fragment>
    );
  }
}

export default Heading;
