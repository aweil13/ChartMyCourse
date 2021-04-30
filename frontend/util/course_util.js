export const fetchUserCourses = userId => (
    $.ajax({
        url: `api/users/${userId}/courses`,
        method: 'GET'
    })
);

export const fetchCourse = courseId => (
    $.ajax({
        url: `api/courses/${courseId}`,
        method: 'GET'
    })
);

export const createCourse = course => (
    $.ajax({
        url: `api/courses`,
        method: 'POST',
        data: {course}
    })
);

export const updateCourse = course => (
    $.ajax({
        url: `api/routes/${course.id}`,
        method: 'PATCH',
        data: {course}
    })
)

export const deleteCourse = courseId =>(
    $.ajax({
        url: `api/routes/${courseId}`,
        method: 'DELETE'
    })
)

