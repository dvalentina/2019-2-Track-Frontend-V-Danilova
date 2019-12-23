import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HeaderManageCities  from './HeaderManageCities.js';
import HeaderCurrentCity from './HeaderCurrentCity.js';
import ManageCities from './ManageCities.js';
import CurrentCity from './CurrentCity.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <Route exact path='/'>
          <HeaderManageCities />
          <ManageCities />
        </Route>
        <Route path='/city'>
          <HeaderCurrentCity />
        </Route>
      </HashRouter>
    );
  }
}
