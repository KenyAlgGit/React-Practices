// import logo from './logo.svg';
import './App.css';
import restaurant from "./restaurant.jpg"
import { Routes, Route } from 'react-router-dom';
import{
  Home,
  About,
  Event,
  Contact
} from "./pages"

import React, {useState, useEffect, useReducer} from "react"

//https://api.github.com/users/KenyAlgGit

function App() {
  //defining all of the routes and pathes
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App;
