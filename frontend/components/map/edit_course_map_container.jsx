import {updateCourse, clearCourseErrors, requestCourse} from '../../actions/courses_actions';
import {connect} from 'react-redux';
import CourseMap from './course_map';
import React from 'react';



class EditCourseMap extends React.Component {
    constructor(props){
        super(props)
        this.state = {course: null};
    }


    componentDidMount(){
        
        if (!this.state.course){
            this.props.requestCourse(this.props.match.params.courseId)
            .then(
            this.setState({course: this.props.course})
            )
        } else {
        this.setState({course: this.props.course})}
    }

    componentDidUpdate(prevProps){
     
        if (prevProps.match.params.courseId !== this.props.match.params.courseId){
            this.props.requestCourse(this.props.match.params.courseId);
            this.setState({course: this.props.course})
        }
    }

    render(){
        const { errors, type, courseAction, clearCourseErrors} = this.props;
        
        if (!this.state.course) return null;
        return (
            <CourseMap
              course={this.state.course}
              courseAction={courseAction}
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
    courseAction: course => dispatch(updateCourse(course)),
    clearCourseErrors: () => dispatch(clearCourseErrors())
})


export default connect(mSTP, mDTP)(EditCourseMap);