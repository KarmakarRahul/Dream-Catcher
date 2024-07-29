import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/home';
// import About from './pages/About';
// import Classes from './pages/Classes';
// import Contact from './pages/Contact';
import Admission from './pages/Admission';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router >
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </Router>
  );
}

export default App;