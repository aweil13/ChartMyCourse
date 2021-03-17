import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </nav>
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