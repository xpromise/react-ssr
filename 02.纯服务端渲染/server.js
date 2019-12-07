import express from 'express';
import React from 'react';
import {
  renderToString,
} from 'react-dom/server';
import App from './src/App';

const app = express();

const content = renderToString(<App />);

app.get('/', (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>纯服务器端渲染</title>
    </head>
    <body>
      <div>${content}</div>
    </body>
    </html>`
  )
})

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
})