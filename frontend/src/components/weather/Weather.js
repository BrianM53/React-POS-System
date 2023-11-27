import React, { useState, useEffect } from "react";
import SpecialFontText from "../../fonts/specialFontText/SpecialFontText";
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
    "Clear Sky": "/images/weather/clearsky.png",
    "Few Clouds": "/images/weather/clouds.png",
    "Scattered Clouds": "/images/weather/clouds.png", 
    "Broken Clouds": "/images/weather/clouds.png",
    "Overcast Clouds": "/images/weather/clouds.png", 
    "Rain": "/images/weather/rain.png",
    "Light Rain": "/images/weather/rain.png",
    "Moderate Rain": "/images/weather/rain.png", 
    "Heavy Rain": "/images/weather/rain.png",
    "Snow": "/images/weather/snow.png",
    "Light Snow": "/images/weather/snow.png", 
    "Moderate Snow": "/images/weather/snow.png", 
    "Heavy Snow": "/images/weather/snow.png", 
    "Thunderstorm": "/images/weather/thunderstorm.png",
    "Mist": "/images/weather/mist.png",
    "Fog": "/images/weather/fog.png",
    "Haze": "/images/weather/fog.png",
    "Drizzle": "/images/weather/drizzle.png",
    "Thunderstorm with Light Rain": "/images/weather/thunderstorm.png",
    "Thunderstorm with Rain": "/images/weather/thunderstorm.png",
    "Thunderstorm with Heavy Rain": "/images/weather/thunderstorm.png",
    "Thunderstorm with Light Snow": "/images/weather/thunderstorm.png",
    "Thunderstorm with Snow": "/images/weather/thunderstorm.png",
    "Thunderstorm with Heavy Snow": "/images/weather/thunderstorm.png",
    "Smoke": "/images/weather/fog.png",
    "Sand": "/images/weather/fog.png",
    "Dust": "/images/weather/fog.png",
    "Ash": "/images/weather/fog.png",
    "Squalls": "/images/weather/fog.png",
    "Tornado": "/images/weather/thunderstorm.png",
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
          <div className="weather-data">
            {main.temp}&deg;F / {((main.temp - 32) * (5 / 9)).toFixed(2)}&deg;C
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