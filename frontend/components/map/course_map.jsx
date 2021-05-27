import React from 'react';
import Footer from '../footer/footer';
import ButtonToolbar from './toolbars/button_toolbar';
import MapSideToolbar from './toolbars/map_side_toolbar';

// const NEW_YORK = {
//     center: {
//         lat: 40.785091,
//         lng: -73.968285
//     },
//     zoom: 14
// };

class CourseMap extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.course;
        
        // if (this.state.waypoints.length > 0){
        //     this.state.waypoints = JSON.parse(this.state.waypoints);
        // }

        this.createMap = this.createMap.bind(this);
        this.createWaypoint = this.createWaypoint.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
        this.renderRoutes = this.renderRoutes.bind(this);
        this.undoWaypoint = this.undoWaypoint.bind(this);
        this.returnToOrigin = this.returnToOrigin.bind(this);
        this.updateDistance = this.updateDistance.bind(this);
        this.currentWaypoints = this.state.waypoints;
        
    }
    
    componentDidMount(){
        if (this.props.course.waypoints.length > 0) {
            let course = this.props.course;
            course.waypoints = JSON.parse(course.waypoints);
            this.setState({course});
            this.currentWaypoints = this.state.waypoints;
        }
        this.createMap();
        if (this.props.course.waypoints.length > 0) 
        {this.renderRoutes();}
    };


   componentWillUnmount(){
       this.props.clearCourseErrors();
   }

//  Create Map using Google Maps API with either Central Park or a previously saved routes first point as its center. 
    createMap(){
        const newYork = new google.maps.LatLng(40.785091, -73.968285);
        const center = this.state.waypoints.length > 0 ? this.state.waypoints[0] : newYork;
        const mapOptions = {center, zoom: 14}
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.map.addListener('click', this.createWaypoint);
    }

    createWaypoint(e){
        this.currentWaypoints.push({lat: e.latLng.lat(), lng: e.latLng.lng()});
        this.renderRoutes();
    }

    renderRoutes(){
        if (!this.directionsService) {this.directionsService = new google.maps.DirectionsService();}
        if(!this.directionsDisplay) {this.directionsDisplay = new google.maps.DirectionsRenderer({map: this.map, preserveViewport: true});}
        const midWaypoints = this.currentWaypoints.slice(1, this.currentWaypoints.length - 1);
        const wpts = midWaypoints.map(way => ({
            location: way,
            stopover: false
        }));

        const initialWaypoint = {
            origin: this.currentWaypoints[0],
            destination: this.currentWaypoints[this.currentWaypoints.length - 1],
            travelMode: 'WALKING',
            waypoints: wpts
        }

        this.directionsService.route(initialWaypoint, (result, status) => {
            if (status === 'OK') {
                this.directionsDisplay.setDirections(result);
                this.updateDistance(result);
            }
        });
        this.setState({waypoints: this.currentWaypoints.slice()});
    }

    updateDistance(result){
        const distanceText = result.routes[0].legs[0].distance.text.toUpperCase();
        this.setState({distance: distanceText});
    }

    clearMarkers(){
        if (this.currentWaypoints.length > 0){
            this.currentWaypoints = [];
            this.directionsDisplay.setDirections({routes: this.currentWaypoints});
            this.setState({ distance: '0 MI', waypoints: [] });
        }
    }

    returnToOrigin(){
        if (this.state.waypoints.length > 1){
            this.currentWaypoints.push(this.currentWaypoints[0]);
            this.renderRoutes();
        }
    }

    undoWaypoint(){
        if (this.currentWaypoints.length < 2){
            this.clearMarkers();
        } else {
            this.currentWaypoints.pop();
            this.renderRoutes();
        }
    }

    render(){
        if (!this.state){return null;}
        return(
        <div>
            <div className='map-container'> 
                   <MapSideToolbar
                    course_id={this.state.id}
                    name={this.state.name}
                    creator_id={this.state.creator_id}
                    description={this.state.description}
                    distance={this.state.distance}
                    waypoints={this.currentWaypoints}
                    errors={this.props.errors}
                    courseAction={this.props.courseAction}
                    clearCourseErrors={this.props.clearCourseErrors}
                    type={this.props.type}
                    clearMarkers={this.clearMarkers}
                    />
            <div ref={map => this.mapNode = map} id='map'/>
                <ButtonToolbar
                    undoWaypoint={this.undoWaypoint}
                    clearMarkers={this.clearMarkers}
                    returnToOrigin={this.returnToOrigin}
                    distance={this.state.distance}
                />
            </div>
                <Footer/>
        </div>
        )
    }
}

export default CourseMap;
