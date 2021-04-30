import * as CourseAPIUtil from '../util/course_util';

export const RECEIVE_USER_COURSES = 'RECEIVE_USER_COURSES';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';
export const REMOVE_COURSE = 'REMOVE_COURSE';
export const RECEIVE_COURSE_ERRORS = 'RECEIVE_COURSE_ERRORS';
export const CLEAR_COURSE_ERRORS = 'CLEAR_COURSE_ERRORS';

const receiveUserCourses = courses => ({
    type: RECEIVE_USER_COURSES,
    courses
})

const receiveCourse = course => ({
    type: RECEIVE_COURSE,
    course
})

const removeCourse = courseId => ({
    type: REMOVE_COURSE,
    courseId
})

const receiveCourseErrors = errors => ({
    type: RECEIVE_COURSE_ERRORS,
    errors
})

export const clearCourseErrors = () => ({
    type: CLEAR_COURSE_ERRORS
})

export const requestUserCourses = userId => dispatch => (
    CourseAPIUtil.fetchUserCourses(userId)
    .then(courses => dispatch(receiveUserCourses(courses)))
    .catch(errors => dispatch(receiveCourseErrors(errors.responseJSON)))
)

export const requestCourse = courseId => dispatch => (
    CourseAPIUtil.fetchCourse(courseId)
    .then(course => dispatch(receiveCourse(course)))
    .catch(error => dispatch(receiveCourseErrors(errors.responseJSON)))
)

export const createCourse = course => dispatch => (
    CourseAPIUtil.createCourse(course)
    .then(course => dispatch(receiveCourse(course)))
    .catch(errors => dispatch(receiveCourseErrors(errors.responseJSON)))
);

export const updateCourse = course => dispatch => (
    CourseAPIUtil.updateCourse(course)
    .then(course => dispatch(receiveCourse(course)))
    .catch(errors => dispatch(receiveCourseErrors(errors.responseJSON)))
)

export const deleteCourse = courseId => dispatch => (
    CourseAPIUtil.deleteCourse(courseId)
    .then(() => dispatch(removeCourse(courseId)))
    .catch(errors => dispatch(receiveCourseErrors(errors.responseJSON)))
)