var express = require('express');
var http    = require('http');
var path    = require('path');
var routes  = require('./routes/index.js');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

http.createServer(app).listen(3000);
