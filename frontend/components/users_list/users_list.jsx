import React from 'react';
import { connect } from 'react-redux';
import {fetchAllUsers} from '../../actions/users_actions';
import Footer from '../footer/footer';

const mSTP = ({entities, session}) => ({
    users: entities.users.allUsers,
    currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

class UsersList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllUsers();
    }

    render(){
        const users = this.props.users;
        console.log(this.props)
        if (!users) {return null;}
        return (
            <>
            <div className='users-list-container'>
                <h1 className='users-title'>USERS</h1>
                <div className='users-container'>
                    {Object.values(users).map(user => (
                        <div className='user-container' key={user.id}>
                            <span> {user.username} </span>
                            <span> {user.first_name} {user.last_name}</span>
                           { this.props.currentUser.id === user.id ?  <button className='add-friend-button'>It's Me!</button> :
                             <button className='add-friend-button'>Add Friend</button> }
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
