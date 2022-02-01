import React from 'react';
import profileimg from '../../images/aboutsqure.jpg';
import './Profile.css'

const Profile = () => {
    return <div className="profile">
        <div className="profile__left">
            <img className='profile__img' src={profileimg} />
            <button className="dark_button">Change Avatar</button>
            <button className="light_button">Delete Avatar</button>
            <div className="details">
                <div className="details__block">
                    <div className="left_text">Name - </div>
                    <div className="right_text"> Rajat</div>
                </div>
                <div className="details__block">
                    <div className="left_text">Email - </div>
                    <div className="right_text"> Rajat@op.com</div>
                </div>
                <div className="details__block">
                    <div className="left_text">MetaMask - </div>
                    <div className="right_text"> MetaRajat</div>
                </div>
            </div>
        </div>
        <div className="profile__right">
            <div className="right__top">
                <h2>Basic Information</h2>
                <div>
                    <button className="light_button--small light_button">Cancel</button>
                    <button className="dark_button--small dark_button">Save</button>
                </div>
            </div>
            {/* add hr if possible */}
            <div className="right__middle">
                <form action="">
                    <div className="form-name">
                        <div className="form-name-box">
                            <p>FIRST NAME</p>
                            <input  type="text" placeholder='Rajat' className='input' />
                        </div>
                        <div className="form-name-box">
                            <p>LAST NAME</p>
                            <input  type="text" placeholder='Kumar' className='input' />
                        </div>
                    </div>
                    <div className="form-email">
                        <div className="form-id-box">
                            <p>EMAIL ADDRESS</p>
                            <input  type="text" placeholder='Rajat@op.com' className='input' />
                        </div>
                        <div className="form-id-box">
                            <p>METAMASK ADDRESS</p>
                            <input  type="text" placeholder='fajgagdfgfg4f56s464' className='input' />
                        </div>
                    </div>
                    <h1>CHANGE PASSWORD</h1>
                    <div className="form-email">
                        <div className="form-id-box">
                            <p>CURRENT PASSWORD</p>
                            <input  type="password" placeholder='Enter Your Current Password' className='input' />
                        </div>
                        <div className="form-id-box">
                            <p>NEW PASSWORD</p>
                            <input  type="password" placeholder='Enter New Password' className='input' />
                        </div>
                    </div>
                    <input className='save-big' type="submit" value="Save" />
                    
                </form>
            </div>
            <div className="right_bottom">

            </div>
        </div>
    </div>
};

export default Profile;
