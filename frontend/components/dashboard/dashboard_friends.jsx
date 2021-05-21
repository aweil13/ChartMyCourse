import {requestUserFriends, removeFriend} from '../../actions/friend_actions';
import {fetchUserFriends} from '../../actions/users_actions';
import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../footer/footer';

const mSTP = ({entities, session}) => ({
    currentUser: entities.users[session.id],
    friendships: entities.friends,
    friends: entities.users['userFriends']
})

const mDTP = dispatch => ({
    requestUserFriends: userId => dispatch(requestUserFriends(userId)),
    fetchUserFriends: userId => dispatch(fetchUserFriends(userId)),
    removeFriend: friendId => dispatch(removeFriend(friendId))
})


class FriendsDashboard extends React.Component {
    
    constructor(props){
        super(props);

        this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
        
    }

    componentDidMount(){
        this.props.fetchUserFriends(this.props.currentUser.id);
        this.props.requestUserFriends(this.props.currentUser.id);
    }

    // componentDidUpdate(prevProps){
    //     if (Object.values(this.props.friendships).length !== Object.values(prevProps.friendships).length){
    //         this.props.requestUserFriends(this.props.currentUserId);
    //     }
    // }

    handleRemoveFriend(friendId){
        this.props.removeFriend(friendId);
        alert("Unfriended!")
        this.props.fetchUserFriends(this.props.currentUser.id)
        this.props.requestUserFriends(this.props.currentUser.id)
    }

    render(){
        const {friendships, friends, currentUser} = this.props;
        console.log(friendships);
        console.log(friends)
        if (!friends){return null;}
        if (Object.values(friends).length === 0){
            return (
                <>
                     <div className='friends-dashboard'>
                        <div className='user-welcome-container'>
                            <h1 className='user-welcome-message'>
                                Welcome {currentUser.first_name} {currentUser.last_name}
                            </h1>
                        </div>
                            <span className='no-friends-message'> You don't have any friends. Click Add Friends above to find users to add as friends!</span>
                     </div>
                     <Footer/>
                </>
            )
        }
        else {return(
            <>
                <div className='friends-dashboard'>
                    <div className='user-welcome-container'>
                         <h1 className='user-welcome-message'>
                            Welcome {currentUser.first_name} {currentUser.last_name}
                         </h1>
                    </div>
                    <h1 className='friends-title'>Friends:</h1>
                    {Object.values(friendships).map((friendship, i) => (
                        <div className='friendship-container' key={i}>
                             <div className='friend-names-container'>
                                <span>{friends[friendship.friend_id].username}</span>
                                <span>{friends[friendship.friend_id].first_name} {friends[friendship.friend_id].last_name}</span>
                            </div>
                            <Link to={`/users/${friends[friendship.friend_id].id}`} className='friend-dashboard-link'>View Courses</Link>
                            <button onClick={() => this.handleRemoveFriend(friendship.id)} className='unfriend-button'>UNFRIEND</button>
                        </div> 
        ))    }
                </div>
                <Footer/>
            </>
        )}
    }


}

export default connect(mSTP, mDTP)(FriendsDashboard);