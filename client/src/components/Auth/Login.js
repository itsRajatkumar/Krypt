import React from 'react';
import { useState } from "react";
import coin from '../../images/coin.png'
import "./Auth.css"
import { Link } from "react-router-dom";

const Login = (props) => {
    const [PasswordVisible, setPasswordVisible] = useState(false);
    const togglepassword = ()=>{
        setPasswordVisible(!PasswordVisible)
    }
  return ((props.trigger) ? (
    <div className="popup">
  <div className="mainblock">
  <div className="popuptop">
            <h1>Login</h1>
            <button onClick={()=>props.setbuttonPopup(false)} className='closepopup'><span className='closebtn'></span></button>
            </div>
      <div className="signup__block">
          <div className="signup__form">
              <form action="">
                  <input className='input__tag' type="email" name="email" placeholder='Email' />
                  <input className='input__tag' type={PasswordVisible ? "text" : "password"} name="password" placeholder='Password'/>
                  <div className='showpass'>
                  <input onClick={togglepassword} type="checkbox" name="" id="" /> Show Password

                  </div>
                  <input className='Submit__btn' type="submit" value="Login" />
              </form>
              <p>Don't have an Account? <button onClick={()=>{props.setbuttonPopup(false); props.setSignbuttonPopup(true) }} className='logsign'>SignUp</button></p>
          </div>
          <div className="coin__image">
              <img src={coin} alt="" />
          </div>
      </div>
      </div>
      </div>
  ) : ""
  )
};

export default Login;
