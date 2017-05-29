/*
A service to do coupon related tasks. 
including. 
- validation. 
*/

module.exports = {
	/*
		validates a coupon object for all the required properties
		and sends an error property to the coupon object 
		if the coupon object is invalid, else returns the coupon. 
	*/
	validate: (coupon) => {

			/*
				we push only valid properties into this, 
				because stripe will return error if any other extra property is found
			*/
			let validatedCoupon = { }; 
			if(!coupon){
				return {
						error:{
							code:400, 
							message: "No coupon data Found!"
						}
					}
			}

			if(!coupon.id){
				return {
						error:{
							code:400,
							message: "Coupon Code is Mandatory!"
						}
				}
			}

			let codeValidation = /^(\w{1,10})$/;
			if(!codeValidation.test(coupon.id)){
				return {
						error:{
							code:400,
							message: "Coupon Code is Invalid!"
						}
				}
			}

			/* pushing id to validated coupon object */
			validatedCoupon.id = coupon.id;


			/*percent should be a number between 1 and 99*/
			let percentValidation = /^([1-9][0-9]*)$/
			if(
				!percentValidation.test(coupon.percent_off) ||
				 coupon.percent_off <=0 ||
				 coupon.percent_off >= 100 ){
				return {
						error:{
							code:400,
							message: "Invalid Coupon Value!"
						}
				}
			}
			validatedCoupon.percent_off = coupon.percent_off;
			
			/*restricting coupons to be used for once only*/
			validatedCoupon.duration = "once";

			return validatedCoupon;
	}
}