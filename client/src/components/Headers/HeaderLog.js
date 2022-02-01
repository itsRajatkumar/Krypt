import React from 'react';
import { useState } from "react";
import logo from '../../images/logo.png';
import './Header.scss'
import { Link } from "react-router-dom";

const HeaderLog = (props) => {
    let mystyle
    if (props.bg === "blue") {
        mystyle = { background: "#0F1D32" }
    }
    let linkstyle ={
        textDecoration: 'none',
        color:"#fff"
      }

      const [isActive, setActive] = useState("false");
      const handleToggle = () => {
        setActive(!isActive);
      };
    
    return <div className="navbar" style={mystyle}>
        <div className='navbar_inner'>
            <div className='navbar_left'>
                <div className='logo'>
                    <img src={logo} alt="logo" className='logo_img' />
                </div>
            </div>
            <div className='navbar_right'>
            <button className={`nav-toggle ${isActive ? "" : "nav-open"}`} onClick={handleToggle} aria-label="toggle navigation">
          <span className="hamburgar" />
        </button>
        <div className="nav__bar">
          <ul className='navbar_ul'>
                    <li><Link to="/" style={linkstyle}>Home</Link></li>
                    <li><Link to="/market" style={linkstyle}>Market</Link></li>
                    <li><Link to="/krypt" style={linkstyle}>Krypt</Link></li>
                    <li><Link to="/send" style={linkstyle}>Send</Link></li>
                    <li><Link to="/profile" style={linkstyle}>Profile</Link></li>
                    <li className='connect_button'>SignOut</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
};

export default HeaderLog;
