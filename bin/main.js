//#!/usr/bin/env node

/**
 * Module dependencies.
 */
console.time("Application ready");
var app = require('../app');
//var debug = require('debug')('greekapp:server');
//var http = require('http');
//var passport = require('passport');
//var config = require('./config').http;

app.ready();
//app.use(passport.initialize(), passport.session());



//var server = http.createServer(app);

