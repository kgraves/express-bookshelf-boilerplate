var bodyParser = require('body-parser');
var can = require('candoo');
var canConfig = require('./config/candoo');
var config = require('config');
var controllers = require('./controllers');
var cookieParser = require('cookie-parser');
var express = require('express');
var favicon = require('serve-favicon');
var helpers = {
  app: require('./helpers/app')
};
var jshare = require('jshare');
// var logger = require('morgan');
var path = require('path');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setup favicon middleware
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')));

// TODO use correct logger based on env
// app.use(logger('dev'));

// setup middleware for body and urlEncoded parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup middleware for cookie parsing
app.use(cookieParser());

// setup middleware for serving static assets
app.use(express.static(path.join(__dirname, 'public')));

// required for sessions and passport (auth)
app.use(session(config.session));

// setup candoo activities
can.configureActivities(canConfig);

// setup jshare to inject bootstrap data into client js
app.use(jshare());

// turn off html minification.
// app.locals.pretty = true;

// let app know about our controllers
app.use('/', controllers);

// catch 404 and forward to error handler
app.use(helpers.app.notFoundHandler);

// development error handler; will print stacktrace
if (app.get('env') === 'development') {
  app.use(helpers.app.devErrorHandler);
}

// production error handler
app.use(helpers.app.errorHandler);

module.exports = app;
