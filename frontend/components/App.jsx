import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginSessionFormContainer from './session_form/login_form_container';
import SignupSessionFormContainer from './session_form/signup_form_container';
import {Route} from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h1>Chart My Course</h1>
            <GreetingContainer/>
        </header>
        <Route path="/login" component={LoginSessionFormContainer}/>
        <Route path="/signup" component={SignupSessionFormContainer}/>
    </div>
);

export default App;