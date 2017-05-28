import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers.js';

import './index.css';

const store = createStore(reducer);

ReactDOM.render(
		<Provider store=store>
			<App />
		</ Provider>, 
		document.getElementById('root')
	);

registerServiceWorker();
