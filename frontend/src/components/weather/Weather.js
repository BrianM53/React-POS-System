import React, { useState, useEffect } from "react";
import SpecialFontText from "../utility/specialFontText/SpecialFontText";
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

  const weatherImageMap = 
  {
    "Clear Sky": "/clearsky.png",
    "Few Clouds": "/clouds.png",
    "Scattered Clouds": "/clouds.png", 
    "Broken Clouds": "/clouds.png",
    "Overcast Clouds": "/clouds.png", 
    "Rain": "/rain.png",
    "Light Rain": "/rain.png",
    "Moderate Rain": "/rain.png", 
    "Heavy Rain": "/rain.png",
    "Snow": "/snow.png",
    "Light Snow": "/snow.png", 
    "Moderate Snow": "/snow.png", 
    "Heavy Snow": "/snow.png", 
    "Thunderstorm": "/thunderstorm.png",
    "Mist": "/mist.png",
    "Fog": "/fog.png",
    "Haze": "/fog.png",
    "Drizzle": "/drizzle.png",
    "Thunderstorm with Light Rain": "/thunderstorm.png",
    "Thunderstorm with Rain": "/thunderstorm.png",
    "Thunderstorm with Heavy Rain": "/thunderstorm.png",
    "Thunderstorm with Light Snow": "/thunderstorm.png",
    "Thunderstorm with Snow": "/thunderstorm.png",
    "Thunderstorm with Heavy Snow": "/thunderstorm.png",
    "Smoke": "/fog.png",
    "Sand": "/fog.png",
    "Dust": "/fog.png",
    "Ash": "/fog.png",
    "Squalls": "/fog.png",
    "Tornado": "/thunderstorm.png",
  }

  const currentDate = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const { name, main, weather: weatherConditions, wind, clouds } = weather;

  return (
    <div className="weather-container">

      <img src={weatherImageMap[capitalizeFirstLetters(weatherConditions[0].description)]} alt="weather type for the day" className="weather-picture"/>

      <div className="weather-data-container">

        <div className="weather-type-container">
          <div className="weather-degrees">
            {main.temp}&deg;F
            <br/>
            {capitalizeFirstLetters(weatherConditions[0].description)}
          </div>

        </div>

        {/* <div className="weather-date">
          {formattedDate}
        </div> */}

      </div>
    </div>
  )

};

export default Weather;