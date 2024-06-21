import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./header";
import Home from "./Home";
import Checkout from './Checkout';

function App() {
  return(
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path='/checkout' element={<><Checkout /></>} /> 
          <Route path='/' element={<><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
