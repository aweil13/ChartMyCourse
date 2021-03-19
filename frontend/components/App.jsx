import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginSessionFormContainer from './session_form/login_form_container';
import SignupSessionFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import {Link, Switch} from 'react-router-dom';

const App = () => (
    <div>
        <header className="navbar">
            <div className="navbar-components-container">
              <div className="logo"><Link to="/">Chart My Course</Link> </div>
              <GreetingContainer/>
            </div>
        </header>
        <Switch>
        <AuthRoute  exact path="/login" component={LoginSessionFormContainer}/>
        <AuthRoute  exact path="/signup" component={SignupSessionFormContainer}/>
        </Switch>
    </div>
);

export default App;