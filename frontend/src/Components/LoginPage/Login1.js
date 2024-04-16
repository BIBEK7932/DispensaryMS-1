import React, { useEffect } from 'react';
//import ReactDOM from 'react-dom';
import './Login1.css';

function Login() {
  useEffect(() => {
    const signInButton = document.getElementById('signIn');
    const signUpButton = document.getElementById('signUp');
    const container = document.getElementById('container');

    const handleSignUpClick = () => {
      container.classList.add('right-panel-active');
    };

    const handleSignInClick = () => {
      container.classList.remove('right-panel-active');
    };

    signUpButton.addEventListener('click', handleSignUpClick);
    signInButton.addEventListener('click', handleSignInClick);

    // Cleanup the event listeners when the component is unmounted
    // return () => {
    //   signUpButton.removeEventListener('click', handleSignUpClick);
    //   signInButton.removeEventListener('click', handleSignInClick);
    // };
  }, []);

  return (
    <div id='mainlogin'>
  
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <select className='custom-select' >
              <option>Doctor</option>
              <option>Receptionist</option>
              <option>Patient</option>
              <option>Admin</option>
            </select>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="ReEnter Password" />
            <button>Sign In</button>
          </form>
        </div>


        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <select className='custom-select'>
            <option>Admin</option>
              <option>Doctor</option>
              <option>Receptionist</option>
              <option>Patient</option>
            </select>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>LogIn</button>
          </form>
        </div>


        <div className="overlay-container">
          <div className="overlay">

            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Log In</button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello!</h1>
              <h3>Don't have any account ?</h3>
              <p>Click below for <b>Sign up</b></p>
              <button className="ghost" id="signUp">Sign In</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
