var express = require('express');

var path = process.cwd();
var TimestampHandler = require(path + '/app/timestamp-handler.js');

var app = express();
var timestampHandler = new TimestampHandler();

app.get('/', function (req, res) {
  res.sendFile(path + '/public/index.html');
});

app.get('/favicon.ico', function (req, res) {
});

app.get('/:timestamp', timestampHandler.getTime);

app.listen(8080, function () {
  console.log('Timestamp app listening on port 8080!');
});