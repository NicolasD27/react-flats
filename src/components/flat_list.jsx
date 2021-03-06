import React, { Component } from 'react';
import Flat from './flat.jsx';


class FlatList extends Component {

	renderList() {
		return this.props.flats.map((flat) => {
			return <Flat key={flat.lat} selectFlat={this.props.selectFlat} name={flat.name} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} lat={flat.lat} lng={flat.lng} />;
		})

	}

	render() {
		return (
			<div className="flat-list">
				{this.renderList()}
			</div>
			
			);
	}
}
export default FlatList;
