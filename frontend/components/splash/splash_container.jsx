import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import Splash from './splash';
import {login} from '../../actions/session_action';


const mapStateToProps = () => {
    return {
        dummy: {username: 'aweil13', password: 'password'},
        signupLink: <Link to='/signup'>SIGN UP</Link>,
        loginLink: <Link to='/login'>LOG IN</Link>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginDummy: dummy => dispatch(login(dummy))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)