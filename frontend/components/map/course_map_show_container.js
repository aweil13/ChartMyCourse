import {connect} from 'react-redux';
import {requestCourse} from '../../actions/courses_actions';
import {requestCourseComments, createComment, deleteComment} from '../../actions/comment_actions';
import {clearCommentErrors} from '../../actions/comment_actions';
import CourseMapShow from './course_map_show';

const mSTP = ({entities, session}, ownProps) => ({
    currentUser: entities.users[session.id],
    course: entities.courses[ownProps.match.params.courseId] ? entities.courses[ownProps.match.params.courseId] : entities.courses,
    comments: entities.comments
})

const mDTP = dispatch => ({
    requestCourse: courseId => dispatch(requestCourse(courseId)),
    requestCourseComments: courseId => dispatch(requestCourseComments(courseId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    createComment: comment => dispatch(createComment(comment)),
    clearCommentErrors: () => dispatch(clearCommentErrors())
})

export default connect(mSTP, mDTP)(CourseMapShow);