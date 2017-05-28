/**
* Presentation Component for the application 
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CouponBox from '../containers/CouponBox';
import swal from 'react-swal';
import '../css/app.css';

class App extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.RequestCoupon();
	}

	showError = (error) => {
		return <swal> error.message </swal>
	}

	render = () => {
		const { loading, error } = this.props;

		if(error){
			return this.showError(error);
		}

		if(loading) {
			return <i className="app-loader fa fa-spinner fa-spin fa-3x" />
		}

		return (
				<div className="app">
					<CouponBox />
				</div>
			);
		}
	}

App.propTypes = {
	RequestCoupon:PropTypes.func.isRequired
}

export default App;