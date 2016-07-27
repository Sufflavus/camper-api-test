var express = require('express');
var TimeHandler = require(path + '/app/timeHandler.server.js');

var app = express();
var path = process.cwd();
var timeHandler = new TimeHandler();

app.get('/', function (req, res) {
  res.sendFile(path + '/public/index.html');
});

app.get('/:timestamp', timeHandler.getTime);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});