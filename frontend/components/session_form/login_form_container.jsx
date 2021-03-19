import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {clearErrors, login} from '../../actions/session_action';
import LoginSessionForm from './login_session_form';

const mapStateToProps = ({errors}) => {
    return {
        initialState: {
            username: '',
            password: ''
        },
        dummy: {username: 'aweil13', password: 'password'},
        errors: errors.session,
        formType: 'login',
        navLink: <Link to='/signup'>SIGN UP</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);