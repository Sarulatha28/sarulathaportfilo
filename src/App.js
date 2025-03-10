import React from 'react';

import Header from './components/Header';
import AboutUs from './components/AboutUs';
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact'
import Project from './components/Project';

const App = () => {
  return (
     <Routes>
     <Route path="/" element={<Header />} />
     <Route path="/contact-us" element={<Contact />} />
     <Route path="/about-us" element={<AboutUs />} />
     <Route path="/projects" element={<Project />} />
     
   </Routes>
  );
};

export default App;
