import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import coursesReducer from './courses_reducer';
import friendsReducer from './friends_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    courses: coursesReducer,
    friends: friendsReducer
});

export default entitiesReducer;