const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Headers', 'content-type');
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Max-Age', 86400);
  next();
})

app.get('/api/news.json', (req, res) => {

  res.json([{
      id: 1,
      title: 'Aedbhmwoc Gjbynsop Qivjuxysq Dqss Njutbypfvw Flio',
    },
    {
      id: 2,
      title: 'Therahet Rvjgcvv Exdndvrqwm Iwcrrkbia Uuvxr',
    },
    {
      id: 3,
      title: 'Vbvoeloja Najxes Aineaxomz Vllscvia',
    },
    {
      id: 4,
      title: 'Dmtx Cjlekp Pfxkc Xiheuu Cmg Rmog',
    },
    {
      id: 5,
      title: 'Xvbj Uwggethhk Ddbevkp Qntbtepqq Khypgnaavo',
    },
    {
      id: 6,
      title: 'Gghckor Boccnrw Ycbki Xoeh Zpibs Rth',
    },
  ]);
})

app.listen(5000, (err) => {
  if (!err) console.log('服务器启动成功：http://localhost:5000');
  else console.log(err);
})