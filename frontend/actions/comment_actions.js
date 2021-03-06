import * as CommentAPIUtil from '../util/comment_util';

export const RECEIVE_COURSE_COMMENTS = 'RECEIVE_COURSE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';

const receiveCourseComments = comments => ({
    type: RECEIVE_COURSE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})

export const requestCourseComments = courseId => dispatch => (
    CommentAPIUtil.fetchCourseComments(courseId)
    .then(comments => (dispatch(receiveCourseComments(comments)))
    , err => dispatch(receiveCommentErrors(err.responseJSON)))
)

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment)
    .then(comment => (dispatch(receiveComment(comment)))
    , err => dispatch(receiveCommentErrors(err.responseJSON)))
)

export const updateComment = comment => dispatch => (
    CommentAPIUtil.updateComment(comment)
    .then(comment => (dispatch(receiveComment(comment)))
    , err => dispatch(receiveCommentErrors(err.responseJSON)))
)

export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId)
    .then(() => (dispatch(removeComment(commentId)))
    , err => dispatch(receiveCommentErrors(err.responseJSON)))
)
