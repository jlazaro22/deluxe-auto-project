import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store.js';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename={`${import.meta.env.VITE_BASE_URL}`}>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
