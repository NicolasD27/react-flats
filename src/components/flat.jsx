import React, { Component } from 'react';


class Flat extends Component {
	handleClick = () => {
      	this.props.selectFlat(this.props.lat, this.props.lng);
 	 }
	render() {
		const { name, imageUrl, price, priceCurrency } = this.props;
		const style = {
		  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`,
		};
		return (
				<div className="card" style={style}>
					<div className="card-category">{price} {priceCurrency}</div>
					<div className="card-description"><h2>{name}</h2></div>
					<a href="#" className="card-link" onClick={this.handleClick}></a>
				</div>
			);
	}
}
export default Flat;