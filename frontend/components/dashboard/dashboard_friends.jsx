import {requestUserFriends, removeFriend} from '../../actions/friend_actions';
import {fetchUserFriends} from '../../actions/users_actions';
import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../footer/footer';

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

        this.friendsList = this.friendsList.bind(this);
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
        const {friends, friendships} = this.props;

        Object.values(friendships).map((friendship, i) => (
          <div className='friendship-container' key={i}>
              <div className='friend-names-container'>
                <span>{friends[friendship.friend_id].username}</span>
                <span>{friends[friendship.friend_id].first_name} {friends[friendship.friend_id].last_name}</span>
              </div>
              <Link to={`/users/${friends[friendship.friend_id].id}`} className='friend-dashboard-link'>View Course</Link>
              <button onClick={() => this.props.removeFriend(friendship.id)} className='unfriend-button'>UNFRIEND</button>
          </div> 
        ))    

    }


    render(){
        const {friendships} = this.props;

        if (Object.values(friendships).length === 0){
            return (
                <>
                     <div className='friends-dashboard'>
                            <span className='no-friends-message'> You don't have any friends. Click Add Friends above to find users to add as friends!</span>
                     </div>
                     <Footer/>
                </>
            )
        }
        else {return(
            <>
                <div className='friends-dashboard'>
                    <h1 className='friends-title'>Friends:</h1>
                    {this.friendsList()}
                </div>
                <Footer/>
            </>
        )}
    }


}

export default connect(mSTP, mDTP)(FriendsDashboard);