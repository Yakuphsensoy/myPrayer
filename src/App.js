import './App.css';
import React from 'react';
import PrayerTimes from './components/PrayerTimes.js';
import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NamesOfAllah from './components/NamesOfAllah.js';
import Dhikr from './components/Dhikr.js';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrayerTimes />} />
          <Route path="/NamesOfAllah" element={<NamesOfAllah />} />
          <Route path="/Dhikr" element={<Dhikr />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
