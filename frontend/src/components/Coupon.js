/**
* Name: Coupon Component.
* Description: Renders a coupon, with coupon code, and coupon value, and a delete icon.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/coupon.css';
import axios from 'axios'

class Coupon extends Component {
	
	render() {
		return (
			<div className="coupon">
				<div className="coupon-discount" > {this.props.percent} OFF</div>
				<div className="coupon-code"> {this.props.code } </div>
				<i className="delete-coupon fa fa-minus-square" onClick={this.deleteCoupon.bind(this)}/>
			</div>
		);
	}
}

Coupon.propTypes = {
	code:PropTypes.string.isRequired,
	percent:PropTypes.string.isRequired
}


export default Coupon;