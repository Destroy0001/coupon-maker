/**
* Container for app component
*/
import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		error:state.error
	}
}


const App = connect(
	mapStateToProps
)(App)

export default App;

