import * as React from "react";
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
      console.log(data.main);
    }
    getWeather();
  }, [search]);

  function handleChange(e) {
    setSearch(e.target.value);
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
          <p>write other city name</p>
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
              <div>
                <p>
                  <b>feels_like: {city.feels_like}</b>
                </p>
                <p>
                  <b>Humidity: {city.humidity} %</b>
                </p>
                <p>
                  min-temp: {city.temp_min}ºc max-temp:{city.temp_max}ºc
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </center>
  );
};

export default Layout;
