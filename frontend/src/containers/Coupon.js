/**
* Container for Coupon component
*/
import { connect } from 'react-redux'
import { deleteCoupon } from '../actions'
import Coupon from '../components/Coupon'

const mapStateToProps = (state) => {
	return {
		coupons: state.coupons
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDeleteCoupon: (id) => {
			dispatch(deleteCoupon(id));
		}
	}
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Coupon)

export default Coupon;

