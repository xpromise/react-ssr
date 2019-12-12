import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import { Provider } from "react-redux";
import { getClientStore } from "../store";

import routes from '../config/routes';

ReactDOM.hydrate(
  <Provider store={getClientStore()}>
    <Router>
      <Switch>
        {
          renderRoutes(routes)
        }
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root')
);