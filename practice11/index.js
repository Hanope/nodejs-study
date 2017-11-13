var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var user = require('./api/user')

// Test환경일 경우 log 찍지 않음
if(process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// 라우터 설정
app.use('/users', user);

module.exports = app;