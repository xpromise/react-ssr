import express from 'express';
import React from 'react';
import {
  renderToString
} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {
  resolve
} from 'path';

import App from '../App';

const app = express();

app.use(express.static(resolve('build/public')));

app.get('/', (req, res) => {

  const content = renderToString(
    <StaticRouter location={req.path}>
      <App />
    </StaticRouter>
  );

  res.send(
    `<!DOCTYPE html>
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
  )
})

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
})