export const fetchUsers = () => (
    $.ajax({
        url: `api/users`,
        method: 'GET'
    })
)

export const fetchUser = userId => (
    $.ajax({
        url: `api/users/${userId}`,
        method: 'GET'
    })
)

export const fetchFriends = () => (
    $.ajax({
        url: `api/users/friends`,
        method: 'GET'
    })
)

