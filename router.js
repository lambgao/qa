var site = require('./controllers/site');

exports = module.exports = function(app) {
	// home page
	app.get('/', site.index);
	app.get('/index', site.index);
	app.get('/testdb', site.testdb);
	app.get('/teach', site.teach);
	app.get('/bubble', site.bubble);
};