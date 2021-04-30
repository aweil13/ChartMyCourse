import {createCourse, clearCourseErrors} from '../../actions/courses_actions';
import {connect} from 'react-redux';
import CourseMap from './course_map';

const mSTP = ({entities, session, errors}) => ({
    course: {
        creator_id: session.id,
        name: '',
        description: '',
        waypoints: [],
        distance: '0 MI'
    },
    currentUser: entities.users[session.id],
    errors: errors.courses,
    type: 'create'
})

const mDTP = dispatch => ({
    createCourse: course => dispatch(createCourse(course)),
    clearCourseErrors: () => dispatch(clearCourseErrors())
});

export default connect(mSTP, mDTP)(CourseMap);