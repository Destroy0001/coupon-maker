/**
* Container for app component
*/
import { connect } from 'react-redux'
import App from '../components/App'
import { requestCoupons } from '../actions'


const mapDispatchToProps = (dispatch) => {
	return {
		RequestCoupon: () => {
			requestCoupons(dispatch);
		}
	}
}

const AppContainer = connect(
						null,
						mapDispatchToProps
					)(App)

export default AppContainer;

