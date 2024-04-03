import React from 'react';
import './App.css';
import front from './Image-1.jpg';
import './Signup.css';
import googlelogo from './google-logo.png';
import { useAuth0 } from "@auth0/auth0-react";

function Signup() {
    const { loginWithRedirect } = useAuth0();


  return (
    <div className="container1">
      <div className="yellow-section">

        <div className='logo'>
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" className="food-munch-logo" alt="Food Munch Logo" />
        </div>
        
      <h1 className='heading'> There's no sincerer love than the love of food</h1>
      <center>
      <div className='signup'>
    <h1>WELCOME TO FOOD MUNCH</h1>
    <p>Log in with your approved account</p>
    <button onClick={() => loginWithRedirect()}><img src={googlelogo}/></button>
    
    </div>
    </center>
      </div>

     

        </div>
  );
}

export default Signup;
