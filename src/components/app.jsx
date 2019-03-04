import React, { Component } from 'react';
import flats from './flats.js'
import FlatList from './flat_list.jsx'
import Gmap from './map.jsx'

class App extends Component {
	constructor(props) {
		super(props);
		console.log("init")
		this.state = {
			selectedFlatLat: 48.884211,
			selectedFlatLng: 2.34689
		};	
	}

	selectFlat = (lat, lng) => {
		this.setState({
			selectedFlatLat: lat,
			selectedFlatLng: lng
		});
	}

	render() {
		console.log("render app")
		return (
			<div>
				<FlatList flats={flats} selectFlat={this.selectFlat}/>
				<Gmap selectedFlatLat={this.state.selectedFlatLat} selectedFlatLng={this.state.selectedFlatLng}/>
			</div>
			
			);
	}
}
export default App;