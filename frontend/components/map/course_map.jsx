import React from 'react';
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
        this.currentWaypoints = [];
        this.currentDistance = 0;
        this.createWaypoint = this.createWaypoint.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
        this.renderRoutes = this.renderRoutes.bind(this);
    }
    componentDidMount(){
        this.createMap();
        if (this.currentWaypoints.length > 0){ this.renderRoutes();}
        console.log(this.currentWaypoints)
    };
    
   

    createMap(){
        this.map = new google.maps.Map(this.mapNode, NEW_YORK);
        this.map.addListener('click', this.createWaypoint);
    }

    createWaypoint(e){
        this.currentWaypoints.push({lat: e.latLng.lat(), lng: e.latLng.lng()});
        this.renderRoutes();
        console.log(this.currentWaypoints);
        console.log(this.map);
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
            }
        })
    }

    clearMarkers(){
        if (this.currentWaypoints.length > 0){
            this.currentWaypoints = [];
            this.directionsDisplay.setDirections({routes: this.currentWaypoints});
        }
        console.log(this.currentWaypoints)

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