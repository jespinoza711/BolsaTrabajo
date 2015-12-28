var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var favicon = require('serve-favicon');
var config = require('./config');
var logger = require('morgan');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();


//Session store
var store =  new MongoStore({
  url:config.mongodb.uri,
});

//Locals var
app.locals =  config;
app.use(compression());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', config.site.html.engine);
app.locals.pretty =  !config.site.html.minify;

//Middelwares 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret:config.express.secret,
  store: store,
  key:config.express.key,
  resave:true,
  saveUninitialized: true
}));

//static dir and favicon
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname ,'public','favicon.ico')));


routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: 'ha ocurrido un error',//err.message,
    error: {}
  });
});


module.exports = app;
