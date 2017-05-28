/*
* name : reducer.js
* description: reducers to change state
*/

const assign = Object.assign || require('object.assign');
const state = {

	loading:false,
	coupons:[],
	error: false

};

const reducer = (state = state, action) => {
	switch(action.type){

		/* show loader if a http request is initiated */
		case 'GET_COUPONS':
		case 'CREATE_COUPON':
		case 'DELETE_COUPON':
			return assign({},state,{loading:true});
		break;

		/* hide loader, and refresh coupons if the request is success */
		case 'GET_COUPONS_SUCCESS':
		case 'CREATE_COUPON_SUCCESS':
		case 'DELETE_COUPON_SUCCESS':
			return assign({},state,{
				loading: false,
				coupons: action.coupons,
				error:false,
			});
		break;

		/* hide loader and show an error if the request has failed */
		case 'REQUEST_COUPONS_FAILED':
		case 'CREATE_COUPON_FAILED':
		case 'DELETE_COUPON_SUCCESS':
			return assign({},state,{
				loading: false, 
				error: action.error
			});
		break;

		default:
			return state;
	}
}

export default reducer;