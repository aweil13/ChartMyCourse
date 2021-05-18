import * as FriendsAPIUtil from '../util/friend_util';

export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const RECEIVE_FRIEND_ERRORS = 'RECEIVE_FRIEND_ERRORS';
export const CLEAR_FRIEND_ERRORS = 'CLEAR_FRIEND_ERRORS';

const receiveFriendErrors = errors => ({
    type: RECEIVE_FRIEND_ERRORS,
    errors
})

export const clearFriendErrors = () => ({
    type: CLEAR_FRIEND_ERRORS
})

const receiveFriend = friend => ({
    type: RECEIVE_FRIEND,
    friend
})

const receiveAllFriends = friends => ({
    type: RECEIVE_ALL_FRIENDS,
    friends
})

const deleteFriend = friendId => ({
    type: DELETE_FRIEND,
    friendId
}) 

export const createFriend = friend => dispatch => (
    FriendsAPIUtil.createFriend(friend)
    .then(friend => (dispatch(receiveFriend(friend)))
    , err => dispatch(receiveFriendErrors(err.responseJSON)))
)

export const requestUserFriends = userId => dispatch => (
    FriendsAPIUtil.fetchUserFriends(userId)
    .then(friends => (dispatch(receiveAllFriends(friends)))
    , err => dispatch(receiveFriendErrors(err.responseJSON)))
)

export const removeFriend = friendId => dispatch => (
    FriendsAPIUtil.deleteFriend(friendId)
    .then(friendId => (dispatch(deleteFriend(friendId)))
    , err => dispatch(receiveFriendErrors(err.responseJSON)))
)