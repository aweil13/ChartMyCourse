import React from 'react';
import {withRoute} from 'react-router-dom';

const mapOptions = {
    center: {
        lat: 40.785091,
        long: -73.968285
    },
    zoom: 14
}

class courseMap extends React.Component{
    componentDidMount(){
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }


render(){
    return(
        <div ref={map => this.mapNode = map} className='map'>
            Map
        </div>
    )
  }
}

export default courseMap;