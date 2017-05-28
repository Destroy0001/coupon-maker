/*
* name : actions.js
* description: contains all the async actions for the applications
*/
import { BASE_API_URL } from './config.js';
import axios from 'axios';


/*actions to request a coupon */
export const requestCoupons = (dispatch) => {
	dispatch({
			type:"GET_COUPONS"
			});

	/* requesting all coupons */
	axios
		.get(`${BASE_API_URL}/coupon`)
		.then(response => {
			dispatch({
				type:"GET_COUPONS_SUCCESS",
				coupons:response.data.data
			});
		})
		.catch(error => {
			dispatch({
				type:"GET_COUPONS_FAILED",
				error:error
			});
		});

};

/*action creater to create a coupon */
export const createCoupon = (dispatch, coupon) => {
	dispatch({
				type:"CREATE_COUPONS"
			});

	/* creating a new coupon */
	axios
		.post(`${BASE_API_URL}/coupon/`,{
			coupon:coupon
		})
		.then(response => {
			dispatch({
				type:"CREATE_COUPON_SUCCESS",
				coupons:response.data.data
			});
		})
		.catch(error => {
			dispatch({
				type:"CREATE_COUPON_FAILED",
				error:error
			});
		});

};

/*action creater to delete a coupon */
export const deleteCoupon = (dispatch,id) =>{
	dispatch({
				type:"DELETE_COUPON"
			});

	/* deleting coupon by id */
	axios
		.delete(`${BASE_API_URL}/coupon/${id}`)
		.then(response => {
			dispatch({
				type:"DELETE_COUPON_SUCCESS",
				coupons:response.data.data
			});
		})
		.catch(error => {
			dispatch({
				type:"DELETE_COUPON_FAILED",
				error:error
			});
		});
}
