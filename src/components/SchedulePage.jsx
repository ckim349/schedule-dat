import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import TodoPage from "./TodoPage";


function SchedulePage() {


  return (
    <>
      <h1>Schedule Page</h1>
      <h3>Allow location access to display weather for the week :) </h3>
      <TodoPage />
      <Weather />
    </>
  )
}

export default SchedulePage