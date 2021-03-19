import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <div className="login-signup-container">
            <nav className="login-signup">
                <Link className="login-button-link" to="/login">
                    <button className="login-button">LOG IN</button>
                </Link>
                <Link className="signup-button-link" to="/signup">
                    <button className="signup-button">SIGN UP</button>
                </Link>
            </nav>
        </div>
    );

    const signedInDisplay = () => (
        <div className="header-display">
            <h3 className="user-name">{currentUser.username}</h3>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? signedInDisplay() : sessionLinks();
}

export default Greeting;