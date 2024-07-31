import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
// import Navbar from './components/common/Navbar';
import Navbar2 from './components/common/Navbar2';
// import Navbar3 from './components/common/Navbar3';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';

function App() {
  return (
    <div className='w-full min-h-screen overflow-x-hidden' >
      
   
   <Routes>

    <Route path="/" element={<Home1/>}/>
    <Route path="/home2" element={<Home2/>}/>
    <Route path="/home3" element={<Home3/>}/>
    <Route path='*' element={<Home1/>}/>
   
  
   </Routes>
    
    </div>
  );
}

export default App;
