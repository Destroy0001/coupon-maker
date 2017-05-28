import React, { Component } from 'react';
import CouponBox from './CouponBox';
import '../css/app.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 1500); 
	}

	render() {
		const { loading } = this.state;

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