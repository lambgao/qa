var db = require('../config').config.db;

exports.index = function(req,res,next){
	res.render('index', {
		locals:{ pagetitle:'中文' }
	});
	console.log("index");
};
exports.testdb = function(req,res,next){
	db.games.find().toArray(function(err, games){
		console.log(games);
	});
	res.render('testdb', {
		locals:{ pagetitle:'中文' }
	});
};
