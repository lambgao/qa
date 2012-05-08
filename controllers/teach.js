var db = require('../config').config.db;
var Corpus = require('../model/corpus').Corpus;

exports.teach = function(req,res,next){
    res.render('teach');
};

exports.teacher = function(req,res,next){
	var corpus = new Corpus();
    corpus.question = req.params.question;
    corpus.answer = req.params.answer;
    db.corpus.insert(corpus, {safe: true}, function(err, records){
        if (err){
            res.json({"status" : 0});
        }else {
        	res.json({"status" : 1});
        	console.log("Record added as " + records[0]._id);
        }
    });
    console.log(corpus);
};