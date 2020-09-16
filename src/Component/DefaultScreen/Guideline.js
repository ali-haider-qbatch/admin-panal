import React from "react";
import Box from "@material-ui/core/Box";
function Guideline() {
  return (
    <Box className="Guideline" borderRadius="borderRadius" bgcolor="#fff">
      <h2 className="font-weight-bold">Guidelines</h2>
      <Box>
        <ul className="Guideline-list">
          <li className="Guideline-list-item">
            Total Items are the number of the items that would be displayed on
            app at user side.
          </li>
          <li className="Guideline-list-item">
            Set number of the items of the lists should be displayed.
          </li>
          <li className="Guideline-list-item">
            Set the duration of the strategy, weekly OR monthly.
          </li>
          <li className="Guideline-list-item">Any time change the strategy.</li>
          <li className="Guideline-list-item">
            Total Items would be multiple of 100 items.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
export default Guideline;
