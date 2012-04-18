var $ = require("mongous").Mongous;
exports.index = function(req,res,next){
	res.render('index', {
		locals:{ pagetitle:'中文' }
	});
	console.log("index");
};
exports.testdb = function(req,res,next){
	$("test.games").find({"game" : "pinball"},function(r){
			//console.log(r);
	});
	
	res.render('testdb', {
		locals:{ pagetitle:'中文' }
	});
};
