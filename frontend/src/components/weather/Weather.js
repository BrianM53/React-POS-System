import React, { useState, useEffect } from "react";
import SpecialFontText from "../specialFontText/SpecialFontText";
import './Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = "b0d4d178a473858f771e581f7d291995";
      const city = "College Station";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weatjer data: ", error);
      }
    };
    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <div>Loading weather data...</div>
    )
  }

  const capitalizeFirstLetters = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  const currentDate = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const { name, main, weather: weatherConditions, wind, clouds } = weather;

  return (
    <div className="weather-container">

      <img src="/clouds.png" alt="restaurant front" className="weather-picture"/>

      <div className="weather-data-container">

        <div className="weather-type-container">
          <div className="weather-degrees">
            {main.temp}&deg;
          </div>

          |

          <div className="weather-type">
            {capitalizeFirstLetters(weatherConditions[0].description)}
          </div>
        </div>

        <div className="weather-date">
          {formattedDate}
        </div>

        <div className="weather-location">
          Bryan-College Station, TX
        </div>

      </div>
    </div>
  )

};

export default Weather;



//       Weather Information for {name}
//       Temperature: {main.temp} °F
//       Pressure: {main.pressure} hPa
//       Humidity: {main.humidity}%
//       Weather Condition: {weatherConditions[0].description}
//       Wind Speed: {wind.speed} mph
//       Wind Direction: {wind.deg}°
//       Cloud Coverage: {clouds.all}% 