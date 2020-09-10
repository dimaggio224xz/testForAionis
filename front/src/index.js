import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import thunk from 'redux-thunk';
import App from './components/App'
import reducer from './components/reducer'



const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<I18nextProvider i18n={i18n}>
				<App/>
			</I18nextProvider>
		</Router>
	</Provider>,
		document.getElementById('root'));