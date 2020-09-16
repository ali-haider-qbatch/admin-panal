import React from "react";
import "./App.css";
import Routes from "./Component/Routes/Routes";
import Box from "@material-ui/core/Box";
function App() {
  return (
    <React.Fragment>
      <Box className="App">
        <Routes />
      </Box>
    </React.Fragment>
  );
}

export default App;
