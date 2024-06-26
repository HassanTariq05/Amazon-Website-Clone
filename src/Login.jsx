import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth);
                if(auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message));
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
