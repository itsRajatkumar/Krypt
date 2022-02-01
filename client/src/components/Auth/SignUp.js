import React from 'react';
import validator from 'validator'
import { useState } from "react";
import coin from '../../images/coin.png'
import "./Auth.css"
import { Link } from "react-router-dom";

const SignUp = (props) => {
    const [PasswordVisible, setPasswordVisible] = useState(false);
    const togglepassword = () => {
        setPasswordVisible(!PasswordVisible)
    }
    const passwordmsgparastyle={}

    const [PasswordStrongMsg, setPasswordStrongMsg] = useState('');
    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })) {
            setPasswordStrongMsg('Strong Password')
            passwordmsgparastyle = {
                color: "#00ff22"
            }
        }
        else {
            setPasswordStrongMsg('Week Password')
            passwordmsgparastyle = {
                Color: "#e20a0a"
            }
        }
    }
    return( (props.trigger) ? (
    <div className="popup">
        <div className="mainblock">
            <div className="popuptop">
            <h1>SignUp</h1>
            <button onClick={()=>props.setSignbuttonPopup(false)} className='closepopup'><span className='closebtn'></span></button>
            </div>
            <div className="signup__block">
                <div className="signup__form">
                    <form action="">
                        <input className='input__tag' type="text" name="firstname" placeholder='First Name' />
                        <input className='input__tag' type="text" name="lastname" placeholder='Last Name' />
                        <input className='input__tag' type="email" name="email" placeholder='Email' />
                        <input className='input__tag' type="text" name="address" placeholder='Address' />
                        <input className='input__tag' type="date" name="dob" placeholder='Date of Birth' />
                        <input className='input__tag' onChange={(e) => validate(e.target.value)} type={PasswordVisible ? "text" : "password"} name="password" placeholder='Password' />
                        <div className='showpass'>
                            <div>
                                <input onClick={togglepassword} type="checkbox" name="" id="" /> <p>Show Password</p>
                            </div>
                            <p className='passstrong' style={passwordmsgparastyle}>{PasswordStrongMsg}</p>
                        </div>
                        <input className='input__tag' type="password" name="cpassword" placeholder='Confirm Password' />
                        <input className='Submit__btn' type="submit" value="Register" />
                    </form>
                    <p>Already have an Account <button onClick={()=>{props.setSignbuttonPopup(false); props.setbuttonPopup(true)}} className='logsign'>Login</button></p>
                </div>
                <div className="coin__image">
                    <img src={coin} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
    : ""
    );
};

export default SignUp;
