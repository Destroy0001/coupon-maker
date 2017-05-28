/*
* name : reducer.js
* description: reducers to change state
*/
import { combineReducers  } from 'redux';
const assign = Object.assign || require('object.assign');
const initState = {

	loading:false,
	error: false

};

const couponState = {
	coupons: []
}

const appReducer = (state = initState, action) => {
	switch(action.type){

		/* show loader if a http request is initiated */
		case 'GET_COUPONS':
		case 'CREATE_COUPON':
		case 'DELETE_COUPON':
			return assign({},state,{
				loading:true
			});

		/* hide loader, and refresh coupons if the request is success */
		case 'GET_COUPONS_SUCCESS':
		case 'CREATE_COUPON_SUCCESS':
		case 'DELETE_COUPON_SUCCESS':
			return assign({},state,{
				loading: false,
				error:false,
			});

		/* hide loader and show an error if the request has failed */
		case 'REQUEST_COUPONS_FAILED':
		case 'CREATE_COUPON_FAILED':
		case 'DELETE_COUPON_FAILED':
			return assign({},state,{
				loading: false,
				error: action.error.message
			});

		default:
			return state;
	}
}

const couponReducer = (state = couponState, action) =>{
	switch(action.type){

		/* hide loader, and refresh coupons if the request is success */
		case 'GET_COUPONS_SUCCESS':
		case 'CREATE_COUPON_SUCCESS':
		case 'DELETE_COUPON_SUCCESS':
			return assign({},state,{
				coupons: action.coupons
			});

		default:
			return state;
	}
}
const reducer = combineReducers({appState:appReducer,couponState:couponReducer});
export default reducer;