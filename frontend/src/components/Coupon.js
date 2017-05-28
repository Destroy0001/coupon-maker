/**
* Name: Coupon Component.
* Description: Renders a coupon, with coupon code, and coupon value, and a delete icon.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/coupon.css';

class Coupon extends Component {

	deleteCoupon = (e) => {
		e.preventDefault();
		this.props.DeleteCoupon(this.props.code);
	}

	render() {
		return (
			<div className="coupon">
				<div className="coupon-discount" > Value: Flat {this.props.percent}% Off</div>
				<div className="coupon-code"> Code: '{this.props.code }' </div>
				<i className="delete-coupon fa fa-minus-square" onClick={this.deleteCoupon}/>
			</div>
		);
	}
}

Coupon.propTypes = {
	code:PropTypes.string.isRequired,
	percent:PropTypes.number.isRequired,
	DeleteCoupon:PropTypes.func.isRequired
}


export default Coupon;