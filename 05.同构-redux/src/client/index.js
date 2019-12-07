import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import getStore from "../store";

import App from '../App'

ReactDOM.hydrate(
  <Provider store={getStore()}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);