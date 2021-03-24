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
    };

render(){
    return(
        <div ref={map => (this.mapNode = map)} id='map'>
            map
        </div>
    )
  }
}

export default courseMap;