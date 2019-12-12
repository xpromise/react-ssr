import express from 'express';
import {
  resolve
} from 'path';
import {
  matchRoutes
} from "react-router-config";
import proxy from 'express-http-proxy';

import {
  getServerStore
} from "../store";
import routes from '../config/routes';
import {
  render
} from './utils'
const app = express();

app.use(express.static(resolve('public')));

// 开启代理服务器（让nodejs服务器作为中间层）
app.use('/api', proxy('http://localhost:5000', {
  proxyReqPathResolver: function (req) {
    return '/api' + req.url
  }
}));

// 改成 * 接受任意GET请求
app.get('*', (req, res) => {

  // 在渲染组件代码时，提前请求加载数据放入store中
  // 此时组件就能得到数据，就不用再发送请求了
  // 根据路由路径，往store里面加数据
  const store = getServerStore();

  // 匹配一级路由 matchRoute
  // 匹配多级路由 matchRoutes
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    res.send(render(store, req));
  })
})

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
})