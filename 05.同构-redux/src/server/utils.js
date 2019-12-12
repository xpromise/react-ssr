import React from 'react';
import {
  renderToString
} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import { Provider } from "react-redux";


import App from '../App';

export const render = (store, req) => {

  const preloadedState = store.getState();
  
  const content = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.path} context={{}}>
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
    <script>
      // 数据注水~
      window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
    </script>
    <script src="/index.js"></script>
  </body>
  </html>`
}