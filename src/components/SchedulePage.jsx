import React, { useState } from "react";
import Weather from "./Weather";

function SchedulePage() {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setLocation(input);
    setInput("");
  };

  function getDate() {
    var currentDate = new Date().toLocaleString("en-US", {weekday: "long"});
    console.log(currentDate);


  }

  //calculate days of the week with dates
  const day = new Date();
  const monday = day.getDate() - (day.getDay() + 6) % 7;
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var d = [];
  for (let i = 0; i < 7; i++) {
    d.push(monday + i);
  }
  const datesOfTheWeek = d.map(function (value, index) {
    return <h3 className="schedule-days" key={value}>{days[index]} {value}</h3>
  })


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="location"></label>
          <input 
            type="text" 
            id="location"
            value={input}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>
        <button>Enter</button>
      </form>
      <button onClick={getDate}>Get date</button>
      <h1>Schedule Page</h1>
      <Weather />
      <div className="schedule-dates">
        {datesOfTheWeek}
      </div>

    </>
  )
}

export default SchedulePage