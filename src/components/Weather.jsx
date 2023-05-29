import React, { useState, useEffect } from "react";
import axios from "axios";
import background from "../assets/background.png"

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  const [locationAccessGranted, setLocationAccessGranted] = useState(false);

  useEffect(() => {
    {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setLocationAccessGranted(true);
        },
      );
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
  }, [location]);
    

   //calculate days of the week with dates
  const day = new Date();
  const monday = day.getDate() + (day.getDay() + 8) % 7;
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var dates = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date();
    currentDate.setDate(monday + i);
    const formattedDate = currentDate.getDate();
    dates.push(formattedDate);
  }
  

  const datesOfTheWeek = dates.map((day, index) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + index);

    const formattedDate = currentDate.getDate();
    const weekday = weekdays[currentDate.getDay()];

    return (
      <table key={index}>
        {locationAccessGranted && weatherData && (
          <tbody>
            <tr>
              <th>{weatherData.daily.data[index].weather}</th>
            </tr> 
          </tbody>
        )}
        <tbody>
          <tr>
            <th 
              className="schedule-days" 
              style={{border: index == 0 ? "2px solid white" : null, borderRadius: "12px"}}
            >{weekday} {formattedDate}</th>
          </tr>
        </tbody>
      </table>
    )
  });

  return (
    <>
      
      <div className="schedule-dates">
        {datesOfTheWeek}
      </div>
      <div>
        <img className="schedule-background" src={background}></img>
      </div>
    </>
    

  )
}

export default Weather