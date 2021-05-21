import {connect} from 'react-redux';
import {requestUserCourses, deleteCourse} from '../../actions/courses_actions';
import {fetchUser} from '../../actions/users_actions';
import DashboardContainer from './dashboard';

const mSTP = ({session, entities}) => ({
    currentUser: entities.users.currentUser ? entities.users.currentUser : entities.users[session.id],
    courses: entities.courses,
    friends: entities.friends,
    id: session.id
});

const mDTP = dispatch => ({
    requestUserCourses: userId => dispatch(requestUserCourses(userId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    deleteCourse: courseId => dispatch(deleteCourse(courseId))
});

export default connect(mSTP, mDTP)(DashboardContainer);