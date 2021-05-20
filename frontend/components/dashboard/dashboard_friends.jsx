import {requestUserFriends, removeFriend} from '../../actions/friend_actions';
import {fetchUserFriends} from '../../actions/users_actions';
import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const mSTP = ({entities, session}) => ({
    currentUserId: session.id,
    friendships: entities.friends,
    friends: entities.users.userFriends
})

const mDTP = dispatch => ({
    requestUserFriends: userId => dispatch(requestUserFriends(userId)),
    fetchUserFriends: userId => dispatch(fetchUserFriends(userId)),
    removeFriend: friendId => dispatch(removeFriend(friendId))
})


class FriendsDashboard extends React.Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUserFriends(this.props.currentUserId);
        this.props.requestUserFriends(this.props.currentUserId);
    }

    // componentDidUpdate(prevProps){
    //     if (Object.values(this.props.friends).length !== Object.values(prevProps.friends).length){
    //         this.props.requestUserFriends(this.props.currentUserId);
    //     }
    // }

    friendsList(){
        const {friends, users} = this.props;
        let userFriends = [];    
        Object.values(users).map(user => {
            if (friends[user.id] !== null) {userFriends.push(user)}
        })

        if (userFriends.length !== 0){
            userFriends.map(friend => (
                <div className='friend-container'>
                    
                </div>
            ))
        }

    }


    render(){
        return (
            <div></div>
        )
    }


}

export default connect(mSTP, mDTP)(FriendsDashboard);