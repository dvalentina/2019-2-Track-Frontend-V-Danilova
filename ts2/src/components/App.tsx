import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import D3WordCloud from './D3WordCloud';
import logo from '../logo.svg';
import '../styles/App.css';

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
          </header>
        </div>
      </Route>
      <Route path='/wordcloud'>
        render={() => (<D3WordCloud />)}
      </Route>
    </HashRouter>
  )
}

export default App;
