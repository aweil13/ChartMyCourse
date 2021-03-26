import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from '../footer/footer';

const mapOptions = {
    center: {
        lat: 40.785091,
        lng: -73.968285
    },
    zoom: 14
};

class courseMap extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        const marker = new google.maps.Marker({
            position: {
                lat: 40.785091,
                lng: -73.968285
            },
            map: this.map
        })
          
        // google.maps.event.addListener(this.map, 'click', (e) => {
        //     this.map.addMarker(e.latLng, this.map)
        // })
        // this.map.addMarker(mapOptions.center, this.map);
    };
    
    // addMarker(location, map){
    //     new google.maps.Marker({
    //         position: location,
    //         map: map
    //     });
    // };

    render(){
        return(
            <div className='map-container'> 
                <div ref={map => (this.mapNode = map)} id='map'>
                 map
                </div>
                <Footer/>
            </div>
        )
    }
}

export default courseMap;