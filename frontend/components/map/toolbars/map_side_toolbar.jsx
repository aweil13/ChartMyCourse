import React from 'react';


class MapSideToolbar extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            creator_id: this.props.creator_id,
            name: this.props.name,
            description: this.props.description,
            waypoints: this.props.waypoints,
            distance: this.props.distance,
            id: this.props.course_id
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillUnmount(){
    //     this.props.clearCourseErrors();
    // }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.waypoints.length > 1){
         const waypointsToJSON = JSON.stringify(this.props.waypoints);
         const course = this.state;
         course['waypoints'] = waypointsToJSON;
         course['distance'] = this.props.distance;
         this.props.courseAction(course);
         alert("Course created succesfully");
         this.setState({name: '', description: ''})
         this.props.clearMarkers();
        } else {
            alert('You must select at least two points on the map to create a course!')
        }
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});   
    }

    // handleErrors(){
    //     if (this.props.errors){
    //     return (
    //         <div className='errors-container'>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </div>
    //     ) }
    // }

    render(){
        return (
            <div className='side-toolbar-container'>
                <form onSubmit={this.handleSubmit} className='side-toolbar-box'>
                    <span className='create-a-course'>Create a Course</span>
                    <div className='course-form-div'>
                        <span className='input-span'>
                            Course Name
                        </span>
                        <input type="text"
                          value={this.state.name}
                          onChange={this.update('name')}
                          className='sidebar-input'  
                        />
                    </div>      
                    <div className='course-form-div'>
                        <span className='input-span'>
                            Course Description
                        </span>
                        <input type="text"
                          value={this.state.description}
                          onChange={this.update('description')}
                          className='sidebar-input'  
                        />
                    </div>      
                    { this.props.type === 'edit' ? <button className='create-course-button'>Edit Course</button> :
                    <button className='create-course-button'>Create Course</button>}
                </form>
            </div>
        )
    }
}


export default MapSideToolbar;