import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { getClientStore } from "../store";

import App from '../App'

ReactDOM.hydrate(
  <Provider store={getClientStore()}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);