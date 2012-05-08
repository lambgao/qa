var db = require('../config').config.db;

exports.bubble = function(req,res,next){
	res.render('bubble');
};

exports.bubbler = function(req,res,next){
	console.log(req.params.question);
	db.corpus.find({"question": req.params.question}).toArray(function(err, corpus){
		console.log("Record find  " + corpus.length);
		var result = {};
		if (err||corpus.length <= 0){
		    result.status = corpus.length;
            res.json(result);
        }else {
            result.status = corpus.length;
            result.corpus = corpus[0];
        	res.json(result);
        }
	});
};
