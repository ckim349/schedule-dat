import React, { useState } from 'react'
import Header from "./components/Header"
import TodoPage from "./components/TodoPage"
import Footer from "./components/Footer"
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <TodoPage />
      <Footer />
    </div>
  )
}

export default App
