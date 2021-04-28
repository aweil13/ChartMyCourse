import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from '../footer/footer';

const NEW_YORK = {
    center: {
        lat: 40.785091,
        lng: -73.968285
    },
    zoom: 14
};

class courseMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        this.waypoints = [];
        this.createWaypoint = this.createWaypoint.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
        this.renderRoutes = this.renderRoutes.bind(this);
    }
    componentDidMount(){
        this.createMap();
        if (this.waypoints.length > 1){ this.renderRoutes();}
        console.log(this.waypoints)
    };
    
   

    createMap(){
        this.map = new google.maps.Map(this.mapNode, NEW_YORK);
        this.map.addListener('click', this.createWaypoint);
    }

    createWaypoint(e){
        this.waypoints.push({lat: e.latLng.lat(), lng: e.latLng.lng()});
        this.renderRoutes();
        console.log(this.waypoints);
        console.log(this.map);
    }

    renderRoutes(){
        if (!this.directionsService) {this.directionsService = new google.maps.DirectionsService();}
        if(!this.directionsDisplay) {this.directionsDisplay = new google.maps.DirectionsRenderer({map: this.map, preserveViewport: true});}
        const midWaypoints = this.waypoints.slice(1, this.waypoints.length - 1);
        const wpts = midWaypoints.map(way => ({
            location: way,
            stopover: false
        }));

        const initialWaypoint = {
            origin: this.waypoints[0],
            destination: this.waypoints[this.waypoints.length - 1],
            travelMode: 'WALKING',
            waypoints: wpts
        }

        this.directionsService.route(initialWaypoint, (result, status) => {
            if (status === 'OK') {
                this.directionsDisplay.setDirections(result);
            }
        })
    }

    clearMarkers(){
        if (this.waypoints.length > 0){
            this.waypoints = [];
            this.directionsDisplay.setDirections({routes: this.waypoints});
        }
        console.log(this.waypoints)

    }


    render(){
        return(
            <div className='map-container'> 
                <div ref={map => (this.mapNode = map)} id='map'>
                 map
                </div>
                <button onClick={() => this.clearMarkers()}>Clear Markers</button>
                <Footer/>
            </div>
        )
    }
}

export default courseMap;