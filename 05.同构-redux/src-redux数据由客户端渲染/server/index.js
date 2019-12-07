import express from 'express';
import {
  resolve
} from 'path';
import {
  render
} from './utils'
const app = express();

app.use(express.static(resolve('build/public')));

// 改成 * 接受任意GET请求
app.get('*', (req, res) => {
  res.send(render(req));
})

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功~');
  else console.log(err);
})