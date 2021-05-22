import {connect} from 'react-redux';
import {requestCourse} from '../../actions/courses_actions';
import CourseMapShow from './course_map_show';

const mSTP = ({entities}) => {
    
}

const mDTP = dispatch => ({
    requestCourse: courseId => dispatch(requestCourse(courseId))
})