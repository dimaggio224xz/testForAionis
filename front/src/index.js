import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/bootstrap.min.css';
import { createStore } from 'redux';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
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
			<I18nextProvider i18n={i18n}>
				<App/>
			</I18nextProvider>
		</Router>
	</Provider>,
		document.getElementById('root'));