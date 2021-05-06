import {connect} from 'react-redux';
import {requestUserCourses, deleteCourse, updateCourse} from '../../actions/courses_actions';
import DashboardContainer from './dashboard';

const mSTP = ({session, entities}) => ({
    currentUser: entities.users[session.id],
    courses: entities.courses
});

const mDTP = dispatch => ({
    requestUserCourses: userId => dispatch(requestUserCourses(userId)),
    deleteCourse: courseId => dispatch(deleteCourse(courseId))
});

export default connect(mSTP, mDTP)(DashboardContainer);