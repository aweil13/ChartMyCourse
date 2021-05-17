import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import courseErrorsReducer from './course_errors_reducer';
import friendErrorsReducer from './friend_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    courses: courseErrorsReducer,
    friends: friendErrorsReducer
})

export default errorsReducer;