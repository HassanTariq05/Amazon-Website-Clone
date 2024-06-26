import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import {useStateValue} from './StateProvider'


function App() {
  const [{}, dispatch] = useStateValue('');

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The current user is: ', authUser);
      if(authUser) {

        dispatch( {
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch( {
          type: 'SET_USER',
          user: null
        })
      } 
    })
  }, [])

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
