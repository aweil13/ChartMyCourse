import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import coursesReducer from './courses_reducer';
import friendsReducer from './friends_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    courses: coursesReducer,
    friends: friendsReducer,
    comments: commentsReducer
});

export default entitiesReducer;