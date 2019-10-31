import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import * as ROUTES from './constants/routes';

import Landing from './Landing';
import Mobile from './Mobile';
import Web from './Web';


function App() {
  return (
    <Router>
        <div className="routerContainer">
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route exact path={ROUTES.MOBILE} component={Mobile} />
            <Route exact path={ROUTES.WEB} component={Web} />
        </div>
    </Router>
  );
}

export default App;
