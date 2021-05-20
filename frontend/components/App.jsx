import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginSessionFormContainer from './session_form/login_form_container';
import SignupSessionFormContainer from './session_form/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Link, Switch, Route} from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import CreateCourseMap from './map/create_course_map_container';
import EditCourseMap from './map/edit_course_map_container';
import DashboardComponent from '../components/dashboard/dashboard_container';
import UsersList from '../components/users_list/users_list';
import UsersShow from '../components/users/users_show';
import FriendsDashboard from '../components/dashboard/dashboard_friends';


const App = () => (
    <div>
        <header className="navbar">
            <div className="navbar-components-container">
              <div className="logo"><Link to="/">Chart My Course</Link> </div>
              <Link to='/map'className='courses-link'>Create Courses</Link>
              <Link to='/users'className='courses-link'>Add Friends</Link>
              <GreetingContainer/>
            </div>
        </header>
        <Switch>
        <AuthRoute exact path="/" component={SplashContainer}/>    
        <AuthRoute  exact path="/login" component={LoginSessionFormContainer}/>
        <AuthRoute  exact path="/signup" component={SignupSessionFormContainer}/>
        <ProtectedRoute exact path="/courses/:courseId/edit" component={EditCourseMap}/>
        <ProtectedRoute exact path="/map" component={CreateCourseMap}/>
        <ProtectedRoute exact path="/dashboard" component={DashboardComponent}/>
        <ProtectedRoute exact path="/dashboard/friends" component={FriendsDashboard}/>
        <ProtectedRoute exact path='/users' component={UsersList}/>
        <ProtectedRoute exact path='/users/:userId' component={UsersShow}/>
        </Switch>
    </div>
);

export default App;