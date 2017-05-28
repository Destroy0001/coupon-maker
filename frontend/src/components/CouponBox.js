/**
* name : CouponBox 
* description: contains the application UI
**/

import React, { Component } from 'react';
import '../css/couponBox.css';
import Coupon from '../containers/Coupon';

class CouponBox extends Component {

	render() {
		
		const processCoupons = () => {
			if (!this.state.coupons.length){
				return (
						<div className="no-coupons"> No Coupons Found! </div>
					)
			}

			return this.state.coupons.map(coupon => {
				return <Coupon key={coupon.id} code={coupon.id} percent={coupon.percent_off} />
			});


		}; 

		return (
				<div className="coupon-box">
					<div className="coupon-box-header">
						 Coupon Management
					</div>
					<div className="coupon-collection">
						{processCoupons()}
					</div>
					<button className="btn add-coupon fa fa-plus"/>
				</div>
			);
		}
}

export default CouponBox;