import React, { Component } from 'react';
import '../css/coupon.css';

class Coupon extends Component {
	render() {
		return (
			<div className="coupon">
				<div className="coupon-discount" > 12 % OFF!</div>
				<div className="coupon-code"> TEST </div>
				<i className="delete-coupon fa fa-minus-square"/>
			</div>
		);
	}
}

export default Coupon;