import React from 'react';
import Footer from '../footer/footer';

class DashboardComponent extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestUserCourses(this.props.currentUser.id)
    }

    render(){
        let array = [];
        const user = this.props.currentUser
        Object.values(this.props.courses).map(course => {array.push(course)})
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
                            Courses Created:
                        </h2>
                    </div>
                </div>
              </div>
              <Footer/>
            </>
        )
    }
}


export default DashboardComponent;