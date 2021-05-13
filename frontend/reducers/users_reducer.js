import {RECEIVE_CURRENT_USER} from '../actions/session_action';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../actions/users_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
          return Object.assign({}, state, {'currentUser': action.currentUser});
        case RECEIVE_ALL_USERS:
          return Object.assign({}, state, {allUsers: action.users});
        case RECEIVE_USER:
          return Object.assign({}, state, {[action.user.id]: action.user})  
        default:
          return state;
    }
}

export default usersReducer;