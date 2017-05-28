/**
* Presentation Component for the application 
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CouponBox from '../containers/CouponBox';
import '../css/app.css';

class App extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.RequestCoupon();
	}

	render = () => {
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