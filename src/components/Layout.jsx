import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Layout = () => {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <center className="layout">
      <div className="box">
        <div className="inputData">
          <TextField
            id="outlined-basic"
            label="search city"
            variant="outlined"
            onChange={handleChange}
          />
        </div>

        <div className="info">
          <div className="location">
            <i
              className="fa-solid fa-street-view streat"
              style={{ color: "#1964e6" }}
            ></i>
            <h1 className="cityName"> pune</h1>
          </div>
          <div className="temp">
            <h1>temp is here 5.5 F </h1>
            <h3>temp min and max</h3>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Layout;
