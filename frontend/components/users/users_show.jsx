import React from 'react';
import {createFriend, removeFriend, requestUserFriends} from '../../actions/friend_actions';
import {fetchUser} from '../../actions/users_actions';
import {requestUserCourses} from '../../actions/courses_actions';
import {connect} from 'react-redux';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom'

const mSTP = ({entities, errors, session}, ownProps) => ({
    userFriends: entities.friends,
    currentUserId: session.id,
    errors: errors,
    user: entities.users[ownProps.match.params.userId],
    courses: entities.courses
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

        this.state = this.props.userFriends;

        this.handleAddFriend = this.handleAddFriend.bind(this);
        this.handleDeleteFriend = this.handleDeleteFriend.bind(this);
        this.addOrDeleteFriendButton = this.addOrDeleteFriendButton.bind(this);
    }

    componentDidMount(){
        this.props.requestUserFriends(this.props.currentUserId).then(this.setState({userFriends: this.props.userFriends}));
        this.props.requestCourses(this.props.match.params.userId);
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps, prevState){
        if (Object.values(this.props.userFriends).length !== Object.values(prevProps.userFriends).length){
            this.props.requestUserFriends(this.props.currentUserId);
            this.props.requestCourses(this.props.match.params.userId);
            this.props.fetchUser(this.props.match.params.userId);
        }

    }


    handleAddFriend(){
        const {user, currentUserId} = this.props;
        this.props.createFriend({user_id: currentUserId, friend_id: user.id})
        .then(this.props.requestUserFriends(this.props.currentUserId))
    }

    handleDeleteFriend(){
        const {userFriends, user} = this.props;
        let friendId;

        for (let key in userFriends){
            if (userFriends[key].friend_id === user.id){
                friendId = key;
            }
        }
        this.props.removeFriend(friendId)
        .then(this.props.requestUserFriends(this.props.currentUserId))
        alert("Unfriended")
    }

    addOrDeleteFriendButton(){
        const {userFriends, user} = this.props;
        let friendId;

        for (let key in userFriends){
            if (userFriends[key].friend_id === user.id){
                friendId = key;
            }
        }

        if (friendId) {
            return <button onClick={this.handleDeleteFriend} className='delete-friend-user-show-button'>Delete Friend</button>
        } else {return  <button onClick={this.handleAddFriend} className='add-friend-user-show-button'>Add Friend</button>}
    }


    render(){
    
        const {user, userFriends} = this.props
        if (!user || !userFriends) return null;
        return (
            <>
              <div className='dashboard-container'>
                <div className='courses-container'>
                    <div className='user-welcome-container'>
                        <h1 className='user-welcome-message'>
                          {user.first_name} {user.last_name}'s Dashboard
                        </h1>
                    </div>
                    {this.addOrDeleteFriendButton()}
                    <div className='courses-title-container'>
                        <h2 className='courses-title'>
                            Courses Created
                        </h2>
                    </div>
                    <table className='courses-table'>
                        <tr className='column-headers'>
                            <th className='table-heading'>Course Name</th>       
                            <th className='table-heading'>Course Description</th>       
                            <th className='table-heading'>Course Distance</th>       
                            <th className='table-heading'>View Course</th>       
                        </tr>
                        {Object.values(this.props.courses).length < 1 ? null : Object.values(this.props.courses).map(course => (
                        <tr key={course.id} className='course-row'>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td className='course-distance-cell'>{course.distance}</td>
                            <td className='edit-delete-block'>
                                <Link to={`/courses/${course.id}`} className='edit-delete-link'>View/Comment Course</Link>
                            </td>
                        </tr>))}
                    </table>
                </div>
              </div>
              <Footer/>
            </>
        )
    }

}

export default connect(mSTP, mDTP)(UsersShow);