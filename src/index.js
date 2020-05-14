import React from 'react';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser';
// import Routes from './routes';
import './styles/globalStyles.css';
import * as serviceWorker from './utils/serviceWorker';
import App from './components/App.js';
import Boundary from './components/Boundary.js';

Sentry.init({dsn: 'https://18ca8d9d851343468091efaab269a856@o390484.ingest.sentry.io/5233732'});

render(
	<Boundary>
		<App />
	</Boundary>,
	document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
