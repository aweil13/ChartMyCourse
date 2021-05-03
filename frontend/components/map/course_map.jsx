import React from 'react';
import Footer from '../footer/footer';
import ButtonToolbar from './toolbars/button_toolbar';
import MapSideToolbar from './toolbars/map_side_toolbar';

const NEW_YORK = {
    center: {
        lat: 40.785091,
        lng: -73.968285
    },
    zoom: 15
};

class CourseMap extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.course;
        this.currentWaypoints = [];
        this.createWaypoint = this.createWaypoint.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
        this.renderRoutes = this.renderRoutes.bind(this);
        this.undoWaypoint = this.undoWaypoint.bind(this);
        this.returnToOrigin = this.returnToOrigin.bind(this);
        this.updateDistance = this.updateDistance.bind(this);
    }
    componentDidMount(){
        this.createMap();
        if (this.currentWaypoints.length > 0){ this.renderRoutes();}
        console.log(this.currentDistance)
    };
    
   componentWillUnmount(){
       this.props.clearCourseErrors();
   }

    createMap(){
        this.map = new google.maps.Map(this.mapNode, NEW_YORK);
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
        })
        this.setState({waypoints: this.currentWaypoints.slice()});
    }

    updateDistance(result){
        const distanceText = result.routes[0].legs[0].distance.text.toUpperCase();
        this.setState({distance: distanceText})
    }

    clearMarkers(){
        if (this.currentWaypoints.length > 0){
            this.currentWaypoints = [];
            this.directionsDisplay.setDirections({routes: this.currentWaypoints});
            this.setState({ distance: '0 MI', waypoints: [] });
        }
    }

    returnToOrigin(){
        if (this.currentWaypoints.length > 1){
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
        return(
            <>
            <div className='map-container'> 
                   <MapSideToolbar
                    name={this.state.name}
                    creator_id={this.state.creator_id}
                    description={this.state.description}
                    distance={this.state.distance}
                    waypoints={this.state.waypoints}
                    errors={this.props.errors}
                    createCourse={this.props.createCourse}
                    clearCourseErrors={this.props.clearCourseErrors}
                />
                <div ref={map => (this.mapNode = map)} id='map'>
                 map
                </div>
                <ButtonToolbar
                    undoWaypoint={this.undoWaypoint}
                    clearMarkers={this.clearMarkers}
                    returnToOrigin={this.returnToOrigin}
                    distance={this.state.distance}
                />
            </div>
                <Footer/>
                </>
        )
    }
}

export default CourseMap;