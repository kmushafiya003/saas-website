import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/common/Navbar';
import Navbar2 from './components/common/Navbar2';
import Navbar3 from './components/common/Navbar3';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes with the appropriate navbar */}
        <Route path="/" element={<><Navbar /><Home1 /></>} />
        <Route path="/Home2" element={<><Navbar2 /><Home2 /></>} />
        <Route path="/home3" element={<><Navbar3 /><Home3 /></>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
