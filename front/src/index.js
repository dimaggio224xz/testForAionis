import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import App from './components/App'

const reducer = (state, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>,
		document.getElementById('root'));