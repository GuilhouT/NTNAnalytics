
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose'),
    models = require('./db/models');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
routes.build(app);

function connectToMongo(callback) {
  var db = mongoose.connect('mongodb://localhost/analytics').connection;

  db.on('error', function(err) {
    console.error('ERROR connectToMongo: ' + err.message);
  });
  db.once('open', function() {
    console.log('Connected to MongoDB');
    callback();
  });
}

connectToMongo(function() {
  app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });
});
