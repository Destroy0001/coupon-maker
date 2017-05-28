/**
* Container for CouponBox component
*/
import { connect } from 'react-redux'
import { requestCoupon, createCoupon } from '../actions'
import CouponBox from '../components/CouponBox'

const mapStateToProps = (state) => {
	return {
		coupons: state.coupons
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		onRequestCoupon: () => {
			dispatch(requestCoupon());
		},
		onCreateCoupons: (coupon) => {
			dispatch(createCoupon(coupon));
		}
	}
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(CouponBox)

export default CouponBox;

