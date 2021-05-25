import {RECEIVE_FRIEND, DELETE_FRIEND, RECEIVE_ALL_FRIENDS} from '../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}
    switch (action.type) {
        case RECEIVE_FRIEND:
            return Object.assign({}, state, {[action.friend.id]: action.friend})
        case RECEIVE_ALL_FRIENDS:
            return action.friends
        case DELETE_FRIEND:
            delete nextState[action.friendId];
            return nextState;
        default:
            return state
    }
}

export default friendsReducer;