import {RECEIVE_USER_COURSES, RECEIVE_COURSE, REMOVE_COURSE} from '../actions/courses_actions';

const coursesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch (action.type) {
        case RECEIVE_USER_COURSES:
            return action.courses
        case RECEIVE_COURSE:
            return action.course;
        case REMOVE_COURSE:
            delete nextState[action.courseId]
            return nextState;
        default:
            return state;
    }
}

export default coursesReducer;