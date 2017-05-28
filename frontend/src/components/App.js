/**
* Presentation Component for the application 
*
*
*/
import React, { Component } from 'react';
import CouponBox from '../containers/CouponBox';
import '../css/app.css';
import axios from 'axios';

class App extends Component {
	
	render() {
		const { loading, error } = this.state;
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

export default App;