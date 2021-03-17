import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {signup} from '../../actions/session_action';
import SignupSessionForm from './signup_session_form';

const mapStateToProps = ({errors}) => {
    return {
        initialState: {
            username: '',
            password: '',
            email: '',
            birthdate: '',
            first_name: '',
            last_name: '',
            gender: '',
            height: '',
            weight: '',
        },
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">LOG IN</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);