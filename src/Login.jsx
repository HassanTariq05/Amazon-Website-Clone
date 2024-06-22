import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();
    }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login-image' src='https://pngimg.com/uploads/amazon/amazon_PNG1.png' alt='Amazon Logo' />
      </Link>

      <div className="login-container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input value={email} type='text' name='email' onChange={e => (setEmail(e.target.value))}/>

          <h5>Password</h5>
          <input value={password} type='password' name='password' onChange={e => (setPassword(e.target.value))}/>

          <button type='submit' className='login-signInButton' onClick={signIn}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
           Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads notice.
        </p>
        <button className='login-registerButton' onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
