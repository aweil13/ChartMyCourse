import React from 'react';
import Footer from '../footer/footer';

class DashboardComponent extends React.Component {
    constructor(props){
        super(props);
        this.renderCourses = this.renderCourses.bind(this);
    }

    componentDidMount(){
        this.props.requestUserCourses(this.props.currentUser.id)
    }

    renderCourses(){
        let courseArray = [];
        Object.values(this.props.courses).map(course => {courseArray.push(course)})
        courseArray.length < 1 ? null : courseArray.map(course => (
            <tr key={course.id} className='course-row'>
                <th>{course.name}</th>
                <th>{course.description}</th>
                <th>{course.distance}</th>
                <th className='edit-delete-block'>
                    <div onClick={() => {this.props.deleteCourse(course.id)}}>Delete Course</div>
                    <div >Edit Course</div>
                </th>
            </tr>
        ))
    }


    render(){
        const user = this.props.currentUser;
        console.log(this.props.courses)
        return (
            <>
              <div className='dashboard-container'>
                <div className='courses-container'>
                    <div className='user-welcome-container'>
                        <h1 className='user-welcome-message'>
                            Welcome {user.first_name} {user.last_name}
                        </h1>
                    </div>
                    <div className='courses-title-container'>
                        <h2 className='courses-title'>
                            Courses Created
                        </h2>
                    </div>
                    <table className='courses-table'>
                        <tr>
                            <th className='table-heading'>Course Name</th>       
                            <th className='table-heading'>Course Description</th>       
                            <th className='table-heading'>Course Distance</th>       
                            <th className='table-heading'>Edit/Delete</th>       
                        </tr>
                        {this.renderCourses()}
                    </table>
                </div>
              </div>
              <Footer/>
            </>
        )
    }
}


export default DashboardComponent;