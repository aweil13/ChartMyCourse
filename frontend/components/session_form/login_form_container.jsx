import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../../actions/session_action';
import LoginSessionForm from './login_session_form';

const mapStateToProps = ({errors}) => {
    return {
        initialState: {
            username: '',
            password: ''
        },
        errors: errors.session,
        formType: 'login',
        navLink: <Link to='/signup'>SIGN UP</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);