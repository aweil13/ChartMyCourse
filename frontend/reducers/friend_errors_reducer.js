import {RECEIVE_FRIEND_ERRORS, CLEAR_FRIEND_ERRORS} from '../actions/friend_actions';


const friendErrorsReducer = (state = []. action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIEND_ERRORS:
            return action.errors;
        case CLEAR_FRIEND_ERRORS:
            return [];
        default:
            return state; 
    }
}

export default friendErrorsReducer;