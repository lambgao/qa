var config = require('./config').config;
var express = require('express');
var app = express.createServer();
var router = require('./router');
var binder = require('./binder');
var path = require('path');

// configuration in all env
app.configure(function() {
	app.set('view engine', 'jade');
	app.set('view options', {"layout": false});
});

var static_dir = path.join(__dirname, 'public');
app.configure('development', function(){
	app.use(express.static(static_dir));
	app.use(express.errorHandler({ "dumpExceptions": true, "showStack": true })); 
});

app.configure('production', function(){
	var maxAge = 31557600000;//one year
	app.use(express.static(static_dir, { "maxAge": maxAge }));
	app.use(express.errorHandler());
	app.set('view cache', true);
});

binder(config.db);
// router
router(app);

app.listen(config.port);
console.log("%s listening on port %d in %s mode", config.name, app.address().port, app.settings.env);
console.log('Server running at http://127.0.0.1:'+app.address().port);