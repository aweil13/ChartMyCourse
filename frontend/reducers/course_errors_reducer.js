import {RECEIVE_COURSE_ERRORS, CLEAR_COURSE_ERRORS} from '../actions/courses_actions';

const courseErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COURSE_ERRORS:
           return action.errors     
        case CLEAR_COURSE_ERRORS:    
           return [];
        default:
            return state;
    }
}

export default courseErrorsReducer;