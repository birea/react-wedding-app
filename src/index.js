import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/containers/App';

/* 
// Use if add Redux:
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);
*/

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.querySelector('.container'));

/* 
// Use if add Redux:
<Provider store={createStoreWithMiddleware(reducers)}></Provider>
*/