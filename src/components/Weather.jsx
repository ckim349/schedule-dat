import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  
  useEffect(() => {
    {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
      );
      console.log(location);
    }
  }, []);


  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/daily',
    params: {
      lat: `${location.latitude}`,
      lon: `${location.longitude}`,
      language: 'en',
      units: 'auto'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_WEATHER_KEY,
      'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
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
    <>
      <h1>{console.log(weatherData.daily)}</h1>
      <h1>{console.log(location)}</h1>

    </>
    

  )
}

export default Weather