import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import './navbar.css'

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                Finance project
            </div>
            <div className="navbar-buttons">
                {!isLoggedIn ? (
                    <>
                        <Link to="/login">
                            <button className="navbar-btn login-btn">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="navbar-btn signup-btn">Signup</button>
                        </Link>
                    </>
                ) : (
                    <Logout setIsLoggedIn={setIsLoggedIn} />
                )}
            </div>
        </nav>
    );
};
