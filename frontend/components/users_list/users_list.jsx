import React from 'react';
import { connect } from 'react-redux';
import {fetchAllUsers} from '../../actions/users_actions';
import Footer from '../footer/footer';

const mSTP = ({entities}) => ({
    users: entities.users.allUsers
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
        if (!users) {return null;}
        return (
            <>
            <div className='users-list-container'>
                <h1 className='users-title'>USERS</h1>
                <div className='users-container'>
                    {Object.values(users).map(user => (
                        <div className='user-container'>
                            <span> {user.first_name}</span>
                            <span> {user.last_name}</span>
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
