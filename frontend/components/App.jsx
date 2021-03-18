import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginSessionFormContainer from './session_form/login_form_container';
import SignupSessionFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import {Route} from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h1>Chart My Course</h1>
            <GreetingContainer/>
        </header>
        <AuthRoute exact path="/login" component={LoginSessionFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupSessionFormContainer}/>
    </div>
);

export default App;