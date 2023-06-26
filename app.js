const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);
app.use(express.static('public'));

app.listen(port, () => {
  console.log(port, '포트로 서버가 대기 중입니다.');
});