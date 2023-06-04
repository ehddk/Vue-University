var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('board', 'root', 'amy001120!', {
	host: '127.0.0.1',
	dialect: 'mysql',
	logging: false,
});

var modelInit = require('./model');
modelInit(Sequelize, sequelize);

var session = require('express-session');
const MYSQLStore = require('express-mysql-session')(session);
var sessionStore = new MYSQLStore({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'amy001120!',
	database: 'board',
});

app.use(
	session({
		key: 'loginkey',
		secret: 'itc801!',
		store: sessionStore,
		resave: false,
		saveUninitialized: false,
	}),
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/user', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
