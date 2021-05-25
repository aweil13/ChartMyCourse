import React from 'react'
import Footer from '../footer/footer';
import CommentToolbar from './toolbars/comment_toolbar';

class CourseMapShow extends React.Component{
    constructor(props){
        super(props);
        
        this.state = this.props.course

        this.createMap = this.createMap.bind(this);
        this.renderRoutes = this.renderRoutes.bind(this);
        
        if (!this.state.waypoints){
        this.courseWaypoints = [];}
        else {this.courseWaypoints = JSON.parse(this.state.waypoints)};
    }

    componentDidUpdate(prevProps){
        if (Object.values(this.props.comments).length !== Object.values(prevProps.comments).length){
            this.props.requestCourseComments(this.props.match.params.courseId);
            this.props.requestCourse(this.props.match.params.courseId);
        }
    }


    componentDidMount(){
        this.props.requestCourseComments(this.props.match.params.courseId);
        this.props.requestCourse(this.props.match.params.courseId);
        
        if (this.courseWaypoints.length > 0){
            let course = this.state
            course.waypoints = JSON.parse(course.waypoints);
            this.setState({course});
            this.courseWaypoints = this.state.waypoints;
            this.initMap();
        } 

    }

    
    initMap(){
        this.createMap();
        this.renderRoutes();
    }

    // componentWillUnmount(){
    //     this.props.clearCommentErrors();
    // }

    createMap(){
        const center = this.courseWaypoints[0];
        const mapOptions = {center, zoom: 13};
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    renderRoutes(){

        if (!this.directionsService) {this.directionsService = new google.maps.DirectionsService();}
        if(!this.directionsDisplay) {this.directionsDisplay = new google.maps.DirectionsRenderer({map: this.map, preserveViewport: true});}
        const midWaypoints = this.courseWaypoints.slice(1, this.courseWaypoints.length - 1);
        const wpts = midWaypoints.map(way => ({
            location: way,
            stopover: false
        }));

        const initialWaypoint = {
            origin: this.courseWaypoints[0],
            destination: this.courseWaypoints[this.courseWaypoints.length - 1],
            travelMode: 'WALKING',
            waypoints: wpts
        }

        this.directionsService.route(initialWaypoint, (result, status) => {
            if (status === 'OK') {
                this.directionsDisplay.setDirections(result);
            }
        });
    }

    render(){
    
        const {course, comments} = this.props;
        if (!course.waypoints) {return null;}
        return (
            <>
                <div className='map-show-container'>
                    <div className='comments-info-container'>
                        <div className='course-info-container'>
                            <h1 className='course-name'>{course.name}</h1>
                            <h1 className='course-distance'>Distance {course.distance}</h1>
                            <p className='course-description'>{course.description}</p>
                        </div>
                        <div className='comments-container'>
                            {Object.values(comments).length < 1 ? <div className='no-comments-message'> <div className='fas fa-comment-slash'></div> No comments on this course, enter one below!</div> : 
                            Object.values(comments).map((comment, idx) => (
                                <div className='comment-container' key={idx}>
                                    <span className='comment-username'>{comment.username} says:</span>
                                    <p className='comment-body'>{comment.body}</p>
                                </div>
                            ))}
                        </div>
                        <CommentToolbar
                            createComment={this.props.createComment}
                            author_id={this.props.currentUser.id}
                            course_id={this.props.match.params.courseId}   
                            username={this.props.currentUser.username} 
                        />
                    </div>
                    <div ref={map => this.mapNode = map} id='show-map'/>
                </div>
                <Footer/>
            </>
        )
    }

     
}

export default CourseMapShow;