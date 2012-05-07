var db = require('../config').config.db;

exports.bubble = function(req,res,next){
	res.render('bubble', {
		locals:{ "pagetitle": "中文" }
	});
	console.log("bubble");
};

