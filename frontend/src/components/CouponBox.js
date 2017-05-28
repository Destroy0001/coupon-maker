import React, { Component } from 'react';
import '../css/couponBox.css';
import Coupon from './Coupon';

class CouponBox extends Component {
	render() {
		return (
			<div className="coupon-box">
				<div className="coupon-box-header">
					 Coupon Management
				</div>

				<div className="coupon-collection">
				</div>
				<button className="btn add-coupon fa fa-plus"/>
			</div>
			);
		}
}

export default CouponBox;