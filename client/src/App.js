import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import LoginUI from './components/login/login';
import ManageGearUI from './components/manageGear/manageGear';
import SignoutsUI from './components/signouts/signouts';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={LoginUI} />
        <Route exact path="/manage" component={ManageGearUI} />
        <Route exact path="/signouts" component={SignoutsUI} />
      </Router>
    </div>
  );
};

export default App;

/**
 * /manage - Manage gear
 * /signouts - signout gear
 */
