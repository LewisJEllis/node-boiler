var express = require('express');
var db = require('./config/db');

var app = express();
require('./app/init')(app, db);

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening at http://%s:%s', server.address().address, server.address().port);
});
