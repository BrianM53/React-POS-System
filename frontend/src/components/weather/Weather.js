import React, { useState, useEffect } from "react";
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
    return <div>Loading weather data...</div>;
  }

  return (
    <div>
      <h2>
        Weather in {weather.name} {weather.main.temp} °F
      </h2>
    </div>
  );
};

export default Weather;
