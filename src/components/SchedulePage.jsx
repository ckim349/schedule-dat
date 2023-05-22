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
      <h1>Schedule Page</h1>
      {location ? <Weather location={location} /> : null}
    </>
  )
}

export default SchedulePage