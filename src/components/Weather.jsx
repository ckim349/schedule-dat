import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather({ location }) {
  const [weatherData, setWeatherData] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: `${location}`},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_WEATHER_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    },
  };

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getWeatherData();
  }, []);
  

  return (
    <h1>Weather</h1>
  )
}

export default Weather