import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';



export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})  

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
})


export const fetchAllUsers = () => dispatch => (
    UserAPIUtil.fetchUsers()
    .then(users => ( dispatch(receiveAllUsers(users))),
    errors => dispatch(receiveUserErrors(errors.responseJSON)))
);

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId)
    .then(user => (dispatch(receiveUser(user)))
    , err => dispatch(receiveUserErrors(err)))
)

export const fetchUserFriends = userId => dispatch => (
    UserAPIUtil.fetchFriends(userId)
    .then(friends => dispatch(receiveFriends(friends)))
);