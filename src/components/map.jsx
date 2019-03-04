import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx'


class GMap extends Component {
  center() {
    return {
      lat: this.props.selectedFlatLat,
      lng: this.props.selectedFlatLng
    };
  }
  render() {
  	console.log("render map" + this.props.selectedFlatLat)
  		return (
  		  // Important! Always set the container height explicitly
  		  <div className="map-container">
  		    <GoogleMapReact
  		      bootstrapURLKeys={{ key: "AIzaSyC1jN696W7z4b2xHCLPvlw-Y3HVizY256U" }}
  		      defaultCenter={this.center()}
  		      defaultZoom={12}
  		    >
  		    <Marker
        	  lat={this.props.selectedFlatLat}
        	  lng={this.props.selectedFlatLng}
        	/>
  		    </GoogleMapReact>
  		  </div>

  		);
    }    
 }


export default GMap;