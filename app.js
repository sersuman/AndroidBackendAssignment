var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
// var engine = require('ejs-mate');
var middleware = require('./middleware');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));


// app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(cors());





var accountApiRouter = require('./routes/api/user');
app.use('/api/account', accountApiRouter);

var restaurantApiRouter = require('./routes/api/restaurant');
app.use('/api/restaurant', restaurantApiRouter);

var postApiRouter = require('./routes/api/post');
app.use('/api/post', postApiRouter);

var homeApiRouter = require('./routes/api/home');
app.use('/api/home', homeApiRouter);


var commentApiRouter = require('./routes/api/comment');
app.use('/api/comment', commentApiRouter);




app.all('/api/*', middleware.checkToken);

// needs authorization from here
var orderAuthApiRouter = require('./routes/api/order-auth');
app.use('/api/order-auth', orderAuthApiRouter);
var restaurantAuthApiRouter = require('./routes/api/restaurant-auth');
app.use('/api/restaurant-auth', restaurantAuthApiRouter);

var postAuthApiRouter = require('./routes/api/post-auth');
app.use('/api/post-auth', postAuthApiRouter);

var commentAuthApiRouter = require('./routes/api/comment-auth');
app.use('/api/comment-auth', commentAuthApiRouter);

var profileApiRouter = require('./routes/api/profile');
app.use('/api/profile', profileApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

 
});

module.exports = app;
