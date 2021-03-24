import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';


const mapOptions = {
    center: {
        lat: 40.785091,
        lng: -73.968285
    },
    zoom: 14
};

class courseMap extends React.Component{
    componentDidMount(){
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }



render(){
    return(
        <div ref={map => this.mapNode = map} id='map'>
            map
        </div>
    )
  }
}

export default withRouter(courseMap);