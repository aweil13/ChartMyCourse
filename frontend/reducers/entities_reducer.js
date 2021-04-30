import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import coursesReducer from './courses_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    courses: coursesReducer 
});

export default entitiesReducer;