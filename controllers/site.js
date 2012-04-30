var db = require('../config').config.db;

exports.index = function(req,res,next){
	res.render('index', {
		locals:{ "pagetitle": "中文" }
	});
};

exports.testdb = function(req,res,next){
	db.games.find().toArray(function(err, games){
		console.log(games);
		res.render('testdb', {
			locals:{
				"pagetitle": "中文",
				"games": games
			}
		});
	});
};

exports.teach = function(req,res,next){
	res.render('teach', {
		locals:{ "pagetitle": "中文" }
	});
	console.log("teach");
};

exports.bubble = function(req,res,next){
	res.render('bubble', {
		locals:{ "pagetitle": "中文" }
	});
	console.log("bubble");
};

