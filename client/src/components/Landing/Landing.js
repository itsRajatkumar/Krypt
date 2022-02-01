import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import './landing.scss'
import coin from '../../images/coin.png'

const Landing = () => {
    let linkstyle = {
        textDecoration: 'none',
        color: "#fff"
    }
    return <div className='landing_outer'>
        <div className='landing'>
            <div className='landing_inner'>

                <div className='content'>
                    <div className='main_content'>
                        <h2>The Easiest and Most Powerful Crypto Platform</h2>
                        <p>Send Crypto To Anyone And Track Your Coin By Using Our Platform Also You Can Buy Our Crypto Currency KRYPT In Seconds With The Help Of KryptSwap</p>
                        <button className='main_button'>START MY JOURNEY</button>
                    </div>
                    <div className='image_landing'>
                        <img src={coin} alt="" className='coin' />
                    </div>
                </div>
            </div>
        </div>

    </div>
};

export default Landing;
