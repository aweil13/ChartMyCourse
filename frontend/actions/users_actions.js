import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})  

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})