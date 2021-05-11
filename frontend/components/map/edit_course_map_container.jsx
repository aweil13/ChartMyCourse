import {updateCourse, clearCourseErrors, requestCourse} from '../../actions/courses_actions';
import {connect} from 'react-redux';
import CourseMap from './course_map';
import React from 'react';



class EditCourseMap extends React.Component {
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.requestCourse(this.props.match.params.courseId);
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.courseId !== this.props.match.params.courseId){
            this.props.requestCourse(this.props.match.params.courseId)
        }
    }

    render(){
        const {course, errors, type, updateCourse, clearCourseErrors} = this.props;
        if (!course) return null;
        return (
            <CourseMap
              course={course}
              updateCourse={updateCourse}
              clearCourseErrors={clearCourseErrors}
              errors={errors}
              type={type}
            />
        );
    }
}

const mSTP = (state, ownProps) => ({
    course: state.entities.courses[ownProps.match.params.courseId],
    errors: state.errors.course,
    type: 'edit'
})

const mDTP = dispatch => ({
    requestCourse: courseId => dispatch(requestCourse(courseId)),
    updateCourse: course => dispatch(updateCourse(course)),
    clearCourseErrors: () => dispatch(clearCourseErrors())
})


export default connect(mSTP, mDTP)(EditCourseMap);