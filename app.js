var express = require('express');
var http = require('http');
var path = require('path');
var debug = require('debug')('greekapp:server');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var config = require('./bin/config').http;


var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));

// setup passport
app.use(passport.initialize(), passport.session());

// Comment out to use handlebars
//app.set('view engine', 'jade');


// Uncomment for Handlebars
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'))
//app.use(express.favicon(__dirname + '/public/favicon.ico'));
//app.use(favicon(null));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users);

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
    message: err.message,
    error: {}
  });
});

var server = false; //http.createServer(app);

app.ready = function () {


    /**
     * Get port from environment and store in Express.
     */
    var port = normalizePort(process.env.PORT || '8082');
    app.set('port', config.port);
    app.set('trust proxy', 'loopback');
    if (!server) {
        /**
         * Create HTTP server.
         */
        server = http.createServer(app).listen(config.port);

        /**
         * Listen on provided port, on all network interfaces.
         */
            //server.listen(config.port);
        server.on('error', onError);
        server.on('listening', onListening);
        console.timeEnd("Application ready");
    }
}

app.ready();

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}


module.exports = app;
