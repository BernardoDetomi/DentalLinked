import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Specialties from './pages/Specialties';
import Contacts from './pages/Contacts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/contacts" component={Contacts} />
      </Routes>
    </Router>
  );
}

export default App;
