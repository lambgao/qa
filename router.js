var site = require('./controllers/site');
var bubble = require('./controllers/bubble');
var teach = require('./controllers/teach');

exports = module.exports = function(app) {
	// home page
	app.all('/', bubble.bubble);
	app.all('/index', site.index);
	app.all('/testdb', site.testdb);
	app.all('/teach', teach.teach);
	app.all('/teacher/:question/:answer', teach.teacher);
	app.all('/bubble', bubble.bubble);
	app.all('/bubbler/:question', bubble.bubbler);
};