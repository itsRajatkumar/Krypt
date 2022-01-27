import React from 'react';
import logo from '../../images/logo.png';
import './landing.scss'
import coin from '../../images/coin.png'

const Landing = () => {
  return <div className='landing_outer'>
<div className='landing'>
    <div className='navbar'>
        <div className='navbar_inner'>
            <div className='navbar_left'>
                <div className='logo'>
                    <img src={logo} alt="logo" className='logo_img'/>
                </div>
              </div>
            <div className='navbar_right'>
                <ul className='navbar_ul'>
                    <li>Home</li>
                    <li>Market</li>
                    <li>Krypt</li>
                    <li>Send</li>
                    <li>Profile</li>
                    <li className='login_button'>login</li>
                    <li className='connect_button'>Connect</li>
                </ul>
            </div>
        </div>
        <div className='content'>
            <div className='main_content'>
            <h2>The Easiest and Most Powerful Crypto Platform</h2>
            <p>Send Crypto To Anyone And Track Your Coin By Using Our Platform Also You Can Buy Our Crypto Currency KRYPT In Seconds With The Help Of KryptSwap</p>
            <button className='main_button'>START MY JOURNEY</button>
            </div>
            <div className='image_landing'>
        <img src={coin} alt="" className='coin'/>
            </div>
        </div>
      </div>
    </div>

    </div>
};

export default Landing;
