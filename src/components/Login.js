import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "./../Action/UserAction"
import { openModal } from '../Action/ModalAction'
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(openModal("closed", ""))
        }
    }, [dispatch, userInfo])
    
    const submitLogin = (event) => {
        event.preventDefault();
        dispatch(login(email, password));
    };

  return (
      <div className='login-form'>
          <h2>Log in or Sign up</h2>
          {error && <h2>{error}</h2>}
          {loading && <h2>Loading ...</h2>}
          <form onSubmit={submitLogin}>
              <button className='facebook-login'>Connect with Facebook</button>
              <button className='google-login'>Connect with Google</button>
              <div className='login-or center' >
                  <span>or</span>
                  <div className='or-divider'></div>
              </div>
              <input type='email'
                  defaultValue={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className='browser-default'
                  placeholder='Email Address' />
              
              <input type='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className='browser-default'
                  placeholder='Password' />
              <button className='sign-up-button'>Login</button>
              <div className='divider'></div>
              <div className='center'>Don’t have an account?<a href='#!'>Sign Up</a></div>
          </form>
    </div>
  )
}

export default Login