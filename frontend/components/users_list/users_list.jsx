import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAllUsers} from '../../actions/users_actions';
import {requestUserFriends, createFriend, removeFriend, clearFriendErrors} from '../../actions/friend_actions';
import {fetchUserFriends} from '../../actions/users_actions';
import Footer from '../footer/footer';

const mSTP = ({entities, session, errors}) => ({
    users: entities.users.allUsers,
    currentUser: entities.users.currentUser ? entities.users.currentUser : entities.users[session.id],
    userFriends: entities.friends,
    errors: errors.friends
})

const mDTP = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    requestUserFriends: userId => dispatch(requestUserFriends(userId)),
    createFriend: friend => dispatch(createFriend(friend)),
    removeFriend: friendId => dispatch(removeFriend(friendId)),
    clearFriendErrors: () => dispatch(clearFriendErrors()),
    fetchUserFriends: userId=> dispatch(fetchUserFriends(userId))
})

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.userFriends
        this.addFriend = this.addFriend.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.requestUserFriends(this.props.currentUser.id);
        this.props.clearFriendErrors();
    }

    componentDidUpdate(prevProps){
        if (Object.values(this.props.userFriends).length !== Object.values(prevProps.userFriends).length){
            this.props.requestUserFriends(this.props.currentUser.id);
        }
    }

    addFriend(userId, friendId){
        this.props.createFriend({user_id: userId, friend_id: friendId})
        .then(() => this.props.fetchUserFriends(this.props.currentUser.id));
        
        alert(`Friend Added!`);
    }


    render(){
        const users = this.props.users;
        const friends = [];
        Object.values(this.props.userFriends).map(friendship => (
            friends.push(friendship.friend_id)
        ))
        if (!users) {return null;}
        return (
            <>
            <div className='users-list-container'>
                <h1 className='users-title'>USERS</h1>
                <div className='users-container'>
                    {Object.values(users).map(user => (
                        <div className='user-container' key={user.id} >
                            <span> {user.username} </span>
                            <span> {user.first_name} {user.last_name}</span>
                           { this.props.currentUser.id === user.id ?  <button className='add-friend-button'>It's Me!</button> :
                             friends.includes(user.id) ? <button className='add-friend-button' onClick={() => {alert('User is already your friend!')}}>Already Your Friend!</button>
                              : <button className='add-friend-button' onClick={() => this.addFriend(this.props.currentUser.id, user.id)}>Add Friend</button> }
                           { this.props.currentUser.id === user.id ?  <Link to={'/dashboard'} className='view-courses-button'><span>Dashboard</span></Link> :
                             <Link to={`/users/${user.id}`} className='view-courses-button'><span>View Courses</span></Link> }
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default connect(mSTP, mDTP)(UsersList);
