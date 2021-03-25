import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';



class courseMap extends React.Component{
    componentDidMount(){
        const mapOptions = {
            center: {
                lat: 40.785091,
                lng: -73.968285
            },
            zoom: 14
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        const marker = new google.maps.Marker({
            position: {
                lat: 40.785091,
                lng: -73.968285
            },
            map: this.map
        })
        this.placeMarker = this.placeMarker.bind(this);
        this.map.addListener("click", (e) => {
            placeMarker(e.latLng, map)
        });
    };
    


    placeMarker(latLng, map){
        new google.maps.Marker({
            position: latLng,
            map: this.map
        });
    }


render(){
    return(
        <div ref={map => (this.mapNode = map)} id='map'>
            map
        </div>
    )
  }
}

export default courseMap;