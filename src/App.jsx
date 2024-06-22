import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<><Login /></>} /> 
          <Route path='/checkout' element={<><Header /><Checkout /></>} /> 
          <Route path='/' element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
