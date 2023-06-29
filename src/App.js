// import logo from './logo.svg';
import './App.css';
// import Inputs from './components/Inputs';
// import Header from './components/Header';
// import MedicineData from './components/MedicineData';
// import { useState, useEffect } from 'react';
// import axios from "axios";
import Medicine from './components/Medicine';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patient from './components/Patient';


function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Patient />} />
        <Route path="/app" element={<Medicine />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
