import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

class DashboardComponent extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestUserCourses(this.props.currentUser.id)
    }



    render(){
        const user = this.props.currentUser;
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
                        <tr className='column-headers'>
                            <th className='table-heading'>Course Name</th>       
                            <th className='table-heading'>Course Description</th>       
                            <th className='table-heading'>Course Distance</th>       
                            <th className='table-heading'>Edit/Delete</th>       
                        </tr>
                        {Object.values(this.props.courses).length < 1 ? null : Object.values(this.props.courses).map(course => (
                        <tr key={course.id} className='course-row'>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td className='course-distance-cell'>{course.distance}</td>
                            <td className='edit-delete-block'>
                                <div className='edit-delete-link' onClick={() => {this.props.deleteCourse(course.id)}}>Delete Course</div>
                                <Link to={`courses/${course.id}/edit`} className='edit-delete-link'>Edit Course</Link>
                            </td>
                        </tr>))}
                    </table>
                </div>
              </div>
              <Footer/>
            </>
        )
    }
}


export default DashboardComponent;