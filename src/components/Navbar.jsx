import React from 'react'
// import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import profile from "../images/profile.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
    <div className="navbar_container">
        <div className="navbar_main">
            <div className="navbar_left">
                <div className="logo_link">
                    <img src={logo} alt="logo" />
                    <h3>Home</h3>
                </div>
            </div>

            <div className="navbar_right">
                <img src={profile} alt="profile" />
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Navbar;