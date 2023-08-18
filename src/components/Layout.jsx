import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Layout = () => {
  const [city, setCity] = React.useState(null);
  const [search, setSearch] = React.useState("Delhi");
  React.useEffect(() => {
    const apiKey = "89a74db9a4e1abd06f44470153d00691";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
    async function getWeather(search) {
      const res = await fetch(`${url}${search}&apiKey=${apiKey}`);
      const data = await res.json();
      setCity(data.main);
      console.log(city);
    }
    getWeather();
  }, [search]);

  function handleChange(e) {
    setSearch(e.target.value);
    console.log(city);
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
            value={search}
          />
        </div>

        {!city ? (
          <p>no data found</p>
        ) : (
          <div className="info">
            <div className="location">
              <i
                className="fa-solid fa-street-view streat"
                style={{ color: "#1964e6" }}
              ></i>
              <h1 className="cityName"> {search}</h1>
            </div>
            <div className="temp">
              <h1>
                Temp:
                {city.temp}
                <i>ºC</i>
              </h1>
              <p>
                min-temp: {city.temp_min}ºC max-temp:{city.temp_max}ºC
              </p>
            </div>
          </div>
        )}
      </div>
    </center>
  );
};

export default Layout;
