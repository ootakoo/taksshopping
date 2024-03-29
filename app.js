
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , socketio =require('socket.io');


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

//connect DB


// Routes

app.get('/', routes.index);
app.get('/memJoin',routes.memJoin);


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

//socket 

var io= socketio.listen(app);
io.set=('log level',2);
io.sockets.on('connection',function(socket){

		socket.on('rint',function(data){
			console.log('Client Data:',data);
		})

});

