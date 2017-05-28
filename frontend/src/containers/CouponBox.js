/**
* Container for CouponBox component
*/
import { connect } from 'react-redux'
import { createCoupon } from '../actions'
import CouponBox from '../components/CouponBox'

const mapStateToProps = (state) => {
	return {
		error:state.appState.error,
		loading:state.appState.loading,
		coupons: state.couponState.coupons
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		CreateCoupon: (coupon) => {
			createCoupon(dispatch,coupon);
		}
	}
}

const CouponBoxContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CouponBox)

export default CouponBoxContainer;

