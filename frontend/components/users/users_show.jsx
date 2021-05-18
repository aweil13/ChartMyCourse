import React from 'react';
import {createFriend, removeFriend, requestUserFriends} from '../../actions/friend_actions';
import {fetchUser} from '../../actions/users_actions';
import {requestUserCourses} from '../../actions/courses_actions';
import {connect} from 'react-redux';


const mSTP = ({entities, errors, session}) => ({
    userFriends: entities.friends,
    currentUserId: session.id,
    errors: errors,
    users: entities.users
})

const mDTP = dispatch => ({
    createFriend: friend => dispatch(createFriend(friend)),
    removeFriend: friendId => dispatch(removeFriend(friendId)),
    requestUserFriends: userId => dispatch(requestUserFriends(userId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    requestCourses: userId => dispatch(requestUserCourses(userId))
});


class UsersShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestUserFriends(this.props.currentUserId);
        this.props.requestCourses(this.props.match.params.userId);
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps){
        if (Object.values(this.props.userFriends).length !== Object.values(prevProps.userFriends).length){
            this.props.requestUserFriends(this.props.currentUserId);
        }
    }

    render(){
        console.log(this.props);
        const user = this.props.users[this.props.match.params.userId]
        return (
            <div></div>
        )
    }

}

export default connect(mSTP, mDTP)(UsersShow);