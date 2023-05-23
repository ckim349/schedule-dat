import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather({ location }) {
  const [weatherData, setWeatherData] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: `${location}`, days: 8},
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
  
  function handleClick() {
    console.log(weatherData.forecast.forecastday[1].day.condition.text);
    console.log(weatherData.forecast.forecastday[2].day.condition.text);
    console.log(weatherData.location.name);
    console.log(weatherData.current.condition.text);
  }


  return (
    <button onClick={handleClick}>check weather :3</button>
  )
}

export default Weather