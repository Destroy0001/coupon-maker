/**
 * CouponController
 *
 * @description :: Server-side logic for managing coupons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const stripe = require("stripe")(sails.config.stripe_api_key);

module.exports = {

	/* 
	 creates a coupon
	 looks for a coupon json object in the body. 
	 sample request format:
	 "
		 coupon:{
			"id": "100OFF",
			"percent_off": "10"
		 }
	 */
	create: (req,res) => {
		let coupon = CouponService.validate(req.body.coupon);

		/*if error is present, log and respond with error */
		if(coupon.error){
			sails.log.error(new Error(coupon.error.message));
			res.status(coupon.error.code);
			res.send(coupon.error.message);
			return;
		}

		/* creating the coupon at stripe if it is valid */
		stripe.coupons.create( coupon, (err,coupon) => {
				if(err){
					sails.log.error(new Error(err));
					res.status(500);
					res.send("An Error occured");
					return; 
				}
				res.send(coupon);
		});
	},

	/* 
		deletes a coupon 
		with the coupon id as a param in the request
	*/
	destroy: (req,res) => {

		let id = req.params.id;
		if(id)
			res.send(stripe.coupons.del(id));
		else{
			sails.log.error(new Error("Invalid ID"));
			res.status(500);
			res.send("Invalid Coupon ID");
			return;
		}

	},

	/* lists all coupons */
	find: (req,res) => {

		/*getting list of coupons from stripe*/
		stripe.coupons.list({},(err, coupons) => {

			if(err){
				sails.log.error(new Error(err));
				res.status(500);
				res.send("An Error occured");
				return; 
			}

			res.send(coupons);
		});

	}
};
