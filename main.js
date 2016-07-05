var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(multer());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/login', multer().array(), function (req, res) {
  setTimeout(function() {
  if (req.body.email == "tw@tw.com") {
      res.send({
        code: 0,
        msg: "Login success."
      });
    } else {
      res.send({
        code: 1,
        msg: "The username or password not correct."
      });
    }
  }, 2000);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
