/**
* name : CouponBox 
* description: contains the application UI
**/

import React, { Component } from 'react';
import '../css/couponBox.css';
import Coupon from '../containers/Coupon';

class CouponBox extends Component {

	/*validates and creates a coupon*/
	createCoupon  = (e) => {
		e.preventDefault();

		let couponCode = document.getElementById('coupon-code');
		let couponValue = document.getElementById('coupon-value');
		let error = false;

		/*placing validation on coupon code for alphanumeric and 10 chars only*/
		let code = couponCode.value;
		let codeValidation = /^(\w{1,10})$/;
		if(!codeValidation.test(code)){
			error = true;
			couponCode.classList.add('input-error');
			couponCode.placeholder = "A 10 char alphanumeric";
			couponCode.value = "";
		}

		let percent = parseInt(couponValue.value);
		/*coupon value has to be number and has to be between 0 and 100*/
		if(
			!percent ||
			typeof percent !== "number" ||
			percent <= 0 ||
			percent >= 100
		){
			error =  true;
			couponValue.classList.add('input-error');
			couponValue.placeholder = "A number between 0 and 100";
			couponValue.value = "";
		}

		/*exit if error is present */
		if(error)
			return;

		couponCode.classList.remove('input-error');
		couponValue.classList.remove('input-error');
		let coupon = {
			id: code,
			percent_off: percent
		}

		this.props.CreateCoupon(coupon);
	}

	/*processes all coupons and then generate components based on them */
	processCoupons = () => {
			if (!this.props.coupons || !this.props.coupons.length){
				return (
						<div className="no-coupons"> No Coupons Found! </div>
					)
			}

			return this.props.coupons.map(coupon => {
				return <Coupon key={coupon.id} code={coupon.id} percent={coupon.percent_off} />
			});
	}

	render = () => {

		const { loading } = this.props;
		if(loading) {
			return <i className="app-loader fa fa-spinner fa-spin fa-3x" />
		}

		return (
				<div className="coupon-box">
					<div className="coupon-box-header">
						 <span className="coupon-header">Coupon Management</span>
						 <span className="error-box">{this.props.error}</span>
					</div>
					<div className="spacer">
						&nbsp;
					</div> 
					<div className="coupon-collection">
						{this.processCoupons()}
					</div>
					<div className="coupon-box-footer form-group">
						<div className="add-coupon">
							<input className="add-coupon-input" id="coupon-code" placeholder="Coupon Code" />
							<input type="numeric" className="add-coupon-input" id="coupon-value" placeholder="Percent Off" />
							<button className="add-coupon-input btn add-coupon-button fa fa-plus" onClick={ this.createCoupon }>
								Add Coupon
							</button>
						</div>
					</div>
				</div>
			);
		}
}


export default CouponBox;