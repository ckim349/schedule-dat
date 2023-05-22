import React, { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoPage from "./components/TodoPage";
import SchedulePage from "./components/SchedulePage"
import Footer from "./components/Footer";
import './App.css';

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
        </ul>
      </nav>
      <Header />
      <Routes>
        <Route path="/" element={<TodoPage />}/>
        <Route path="/schedule" element={<SchedulePage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
