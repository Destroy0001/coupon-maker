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

			/* pushing id to validated coupon object */
			validatedCoupon.id = coupon.id;


			/*At least one between amount and percent_off is required */
			if(!coupon.percent_off){
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