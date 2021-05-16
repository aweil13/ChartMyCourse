export const createFriend = friend => (
    $.ajax({
        url: 'api/friends',
        method: 'POST',
        data: {friend}
    })
)


export const fetchUserFriends = userId => (
    $.ajax({
        url: `api/users/${userId}/friends`,
        method: 'GET'
    })
)

export const deleteFriend = friendId => (
    $.ajax({
        url: `api/friends/${friendId}`
    })
)

