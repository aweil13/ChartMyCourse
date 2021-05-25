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
    //     if (Object.values(this.props.friends).length !== Object.values(prevProps.friends).length){
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

        if (!friends || !friendships){return null;}
        if (Object.values(friends).length === 0){
            return (
                <>
                     <div className='friends-dashboard'>
                        <div className='user-welcome-container'>
                            <h1 className='user-welcome-message'>
                                Welcome {currentUser.first_name} {currentUser.last_name}
                            </h1>
                        </div>
                        <Link to='/dashboard' className='dashboard-link-container'>
                            <span className='friends-text'>Courses</span>
                            <div  className='fas fa-route'></div>
                        </Link>
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
                        <Link to='/dashboard' className='dashboard-link-container'>
                            <span className='friends-text'>Courses</span>
                            <div  className='fas fa-route'></div>
                        </Link>
                    <h1 className='friends-title'>Friends</h1>
                    <div className='friends-container'>
                    { Object.values(friendships).map((friendship, i) => (
                        <div className='friendship-container' key={i}>
                             <div className='friend-name-container'>
                                <span>{friends[friendship.friend_id].username}</span>
                            </div>
                            <Link to={`/users/${friends[friendship.friend_id].id}`} className='user-dashboard-link'>
                            <span  className='courses-text'>Courses</span>
                            <div  className='fas fa-running'></div>
                            </Link>
                            <button onClick={() => this.handleRemoveFriend(friendship.id)} className='unfriend-button'>UNFRIEND</button>
                        </div> 
                    ))}
                    </div>
                </div>
                <Footer/>
            </>
        )}
    }


}

export default connect(mSTP, mDTP)(FriendsDashboard);