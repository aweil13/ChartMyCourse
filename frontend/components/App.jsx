import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginSessionFormContainer from './session_form/login_form_container';
import SignupSessionFormContainer from './session_form/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Link, Switch, Route} from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import CourseMap from './map/course_map_container';


const App = () => (
    <div>
        <header className="navbar">
            <div className="navbar-components-container">
              <div className="logo"><Link to="/">Chart My Course</Link> </div>
              <Link to='/map'className='courses-link'>Courses</Link>
              <GreetingContainer/>
            </div>
        </header>
        <Switch>
        <AuthRoute exact path="/" component={SplashContainer}/>    
        <AuthRoute  exact path="/login" component={LoginSessionFormContainer}/>
        <AuthRoute  exact path="/signup" component={SignupSessionFormContainer}/>
        <Route path='/map' component={CourseMap}/>
        </Switch>
    </div>
);

export default App;