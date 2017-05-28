/**
* Container for app component
*/
import { connect } from 'react-redux'
import App from '../components/App'
import { requestCoupons } from '../actions'

const mapStateToProps = (state) => {
	return {
		loading: state.appState.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		RequestCoupon: () => {
			requestCoupons(dispatch);
		}
	}
}

const AppContainer = connect(
						mapStateToProps,
						mapDispatchToProps
					)(App)

export default AppContainer;

