import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Sheffield",

    date: "Monday 11:06",
    description: "clouds",
    humidity: "68",
    wind: "1",
    temperature: "16",
  };
  return (
    <div className="Weather">
      <div className="top-box">
        <form className="search-form">
          <input
            type="text"
            placeholder="Enter a city..."
            required
            className="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>

        <h1>
          <span className="weather-info-container">
            <img
              className="weather-icon"
              src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
              width="100px"
              alt="weather icon"
            />
          </span>
          <span className="current-temperature">
            {weatherData.temperature}ºC
          </span>
          <br />
          <span className="current-city">{weatherData.city}</span>
        </h1>

        <p>
          <span></span>
          {weatherData.date}, {weatherData.description}
          <span></span>
          <br />
          Humidity: {weatherData.humidity}%{" "}
          <span className="weather-data"></span>, Wind: {weatherData.wind}km/h
          <span className="weather-data"></span>
        </p>
      </div>

      <div className="bottom-box">
        <div className="weekly-forecast">Tues Wed Thu Fri Sat</div>
      </div>
      <div className="footnote">
        This project has been coded by
        <a href="https://github.com/SL-GW" target="_blank" rel="noreferrer">
          Sarah Gray
        </a>
        , it is open-sourced on
        <a
          href="https://github.com/SL-GW/react-weather-search-engine"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        and hosted on
        <a
          href="https://weather-search-engine-with-react.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  );
}
