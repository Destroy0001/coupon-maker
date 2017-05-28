/**
* Container for Coupon component
*/
import { connect } from 'react-redux'
import { deleteCoupon } from '../actions'
import Coupon from '../components/Coupon'


const mapDispatchToProps = (dispatch) => {
	return {
		DeleteCoupon: (id) => {
			deleteCoupon(dispatch,id);
		}
	}
}

const CouponContainer = connect(
	null,
	mapDispatchToProps
)(Coupon)

export default CouponContainer;

