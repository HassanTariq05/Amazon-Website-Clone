import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './index.css';
import { useEffect } from 'react';
import Orders from './Orders';

const promise = loadStripe('pk_test_51PWLFN07N3agpj4PTfXdoPutTHMvH942T8FWg4SLyJHIjhAdVuRFvApP8KOty9iKznBGLm69cVFYWsIhQcw30VrK00JHVeR4Eb');

function App() {
  const [{}, dispatch] = useStateValue('');

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The current user is: ', authUser);
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<><Header /><Checkout /><Footer/></>} />
          <Route path='/orders' element={<><Header /><Orders /><Footer/></>} />
          <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements><Footer/></>} />
          <Route path='/' element={<><Header /><Home /><Footer/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
