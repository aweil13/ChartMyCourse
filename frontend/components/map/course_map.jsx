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
        this.createMap = this.createMap.bind(this);
        this.createWaypoint = this.createWaypoint.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
       
    }
    componentDidMount(){
        this.createMap()
        console.log(this.map)
    };
    
   

    createMap(){
        this.map = new google.maps.Map(this.mapNode, NEW_YORK);
        this.map.addListener('click', this.createWaypoint);
    }

    createWaypoint(e){
        let marker = {lat: e.latLng.lat(), lng: e.latLng.lng()};
        const mapMarker = new google.maps.Marker({
            position: marker,
            map: this.map
        })
        this.waypoints.push(marker);
        console.log(mapMarker);
        console.log(this.map);
    }



    clearMarkers(){
        if (this.waypoints.length > 0){
            this.waypoints = [];
        }
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