var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//访问地址，修改编写/public/swagger/swagger.json文件即可改变相应的接口描述
// http://127.0.0.1:3000/static/swagger/index.html#/
app.use('/static', express.static('public'));
var sum = 10;
var reuslt = sum;
console.log(reuslt)
app.listen(3000, function () {
  console.log('http://127.0.0.1:3000/static/swagger/index.html');
});
