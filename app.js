var express = require('express');
var app = express();
var engines = require('consolidate');
var path = require('path');
var cookieParse = require('cookie-parser');
var logger = require('morgan');

// router 설정
var indexRouter = require('./app/routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/app/views');
// view 경로 설정

// 화면 engine을 ejs로 설정
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
// app.use(express.static(__dirname + './public'));
app.use('/public', express.static(__dirname + '/public'));

app.use('/', indexRouter);

module.exports = app;