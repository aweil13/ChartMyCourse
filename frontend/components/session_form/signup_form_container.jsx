import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {clearErrors, signup, login} from '../../actions/session_action';
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
        dummy: {username: 'aweil13', password: 'password'},
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">LOG IN</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginDummy: dummy => dispatch(login(dummy)),
        processForm: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);