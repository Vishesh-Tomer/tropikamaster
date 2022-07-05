import React from 'react';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import Fruits from './Components/Fruits';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
