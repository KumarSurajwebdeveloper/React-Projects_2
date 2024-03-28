import React, { useState, useEffect } from "react";
import "./Weather.css";
import search_icon from "./Assets/search.png";
import clear_icon from "./Assets/clear.png";
import cloud_icon from "./Assets/cloud.png";
import drizzle_icon from "./Assets/drizzle.png";
import rain_icon from "./Assets/rain.png";
import snow_icon from "./Assets/snow.png";
import wind_icon from "./Assets/wind.png";
import humidity_icon from "./Assets/humidity.png";
import mist_icon from "./Assets/mist.png";

const Weather = () => {
  let [wicon, setWicon] = useState(cloud_icon);
  const [city, setCity] = useState(() => {
    // Retrieve city from localStorage or default to an empty string
    return localStorage.getItem("city") || "";
  });

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    setCity(element[0].value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!city) return;

      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&type=accurate&APPID=093a59e21fd3d7f6408aa85c7f8aa439`;
      let response = await fetch(url);
      let data = await response.json();

      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-rate");
      const temperature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML = data.main.humidity + " %";
      wind[0].innerHTML = data.wind.speed + " km/h";
      temperature[0].innerHTML = Math.floor(data.main.temp) + "°c";
      location[0].innerHTML = data.name;

      switch (data.weather[0].icon) {
        case "01d":
        case "01n":
          setWicon(clear_icon);
          break;
        case "02d":
        case "02n":
          setWicon(cloud_icon);
          break;
        case "03d":
        case "03n":
          setWicon(drizzle_icon);
          break;
        case "04d":
        case "04n":
          setWicon(cloud_icon);
          break;
        case "09d":
        case "09n":
          setWicon(rain_icon);
          break;
        case "10d":
        case "10n":
          setWicon(rain_icon);
          break;
        case "13d":
        case "13n":
          setWicon(snow_icon);
          break;
        case "50d":
        case "50n":
          setWicon(mist_icon);
          break;
        default:
          setWicon(clear_icon);
      }
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    // Save city to localStorage when it changes
    localStorage.setItem("city", city);
  }, [city]);

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Enter city name"
          value={city} // Bind input value to city state
          onChange={(e) => setCity(e.target.value)} // Update city state when input changes
        />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">25°C</div>
      <div className="weather-location">Mumbai</div>
      <div className="data-container">
        <div className="element">
          <img className="icon" src={humidity_icon} alt="" />
          <div className="data">
            <div className="humidity-percent">30%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img className="icon" src={wind_icon} alt="." />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
