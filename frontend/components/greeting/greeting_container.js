import {connect} from 'react-redux';
import {logout} from '../../actions/session_action';
import Greeting from './greeting';

const mapStateToProps = ({session, entities}) => {
    return {
        currentUser: entities.users.currentUser ? entities.users.currentUser : entities.users[session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);