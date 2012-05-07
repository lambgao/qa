var config = require('./config').config;

exports = module.exports = function(db) {
	db.bind('games');
	db.bind('corpus');
}