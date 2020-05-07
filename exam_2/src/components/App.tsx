import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../styles/App.css'
import Translate from './Translate'

function App() {
	return (
		<HashRouter>
			<Route exact path='/'>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.tsx</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
						<Link to='/translate' className='App-link'>
							Translate
						</Link>
					</header>
				</div>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</HashRouter>
	);
}

export default App;
