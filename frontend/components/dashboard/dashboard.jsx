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
        Object.values(this.props.courses).map(course => {array.push(course)})
        console.log(array);
        console.log(this.props.courses)
        console.log(this.props.currentUser)
        return (
            <div className='dashboard-container'>
                <div></div>
                <Footer/>
            </div>
        )
    }
}


export default DashboardComponent;