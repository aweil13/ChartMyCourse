import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

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