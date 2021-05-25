import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

class DashboardComponent extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){     
        this.props.requestUserCourses(this.props.id);
            
    }



    render(){
        const user = this.props.currentUser;
        if (!user) {return null;}
        return (
            <>
              <div className='dashboard-container'>
                <div className='courses-container'>
                    <div className='user-welcome-container'>
                        <h1 className='user-welcome-message'>
                            Welcome {user.first_name} {user.last_name}
                        </h1>
                    </div>
                    <Link to='/dashboard/friends' className='friends-link-container'>
                        <span className='friends-text'>Friends</span>
                        <div to='/dashboard/friends' className='fas fa-user-friends'></div>
                    </Link>
                    <div className='courses-title-container'>
                        <h2 className='courses-title'>
                            Courses Created
                        </h2>
                    </div>
                    <table className='courses-table'>
                      <thead>
                        <tr className='column-headers'>
                            <th className='table-heading'>Course Name</th>       
                            <th className='table-heading'>Course Description</th>       
                            <th className='table-heading'>Course Distance</th>       
                            <th className='table-heading'>Edit/Delete</th>       
                        </tr>
                      </thead>
                        <tbody>
                        {Object.values(this.props.courses).length < 1 ? null : Object.values(this.props.courses).map(course => (
                        <tr key={course.id} className='course-row'>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td className='course-distance-cell'>{course.distance}</td>
                            <td className='edit-delete-block'>
                                <div className='edit-delete-link' onClick={() => {this.props.deleteCourse(course.id)}}>Delete Course</div>
                                <Link to={`courses/${course.id}/edit`} className='edit-delete-link'>Edit Course</Link>
                                <Link to={`courses/${course.id}`} className='edit-delete-link'>View Comments</Link>
                            </td>
                        </tr>))}
                        </tbody>
                    </table>
                </div>
              </div>
              <Footer/>
            </>
        )
    }
}


export default DashboardComponent;