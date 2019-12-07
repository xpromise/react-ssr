import React from 'react';
import {
  renderToString
} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import getStore from "../store";

import App from '../App';

export const render = (req) => {
  
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React-SSR</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="/index.js"></script>
  </body>
  </html>`
}