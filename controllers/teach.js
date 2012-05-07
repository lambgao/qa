var db = require('../config').config.db;
var corpus = require('../model/corpus').corpus;
var pinyin = require('../util/pinyin');

exports.teach = function(req,res,next){
    res.render('teach');
};

exports.teacher = function(req,res,next){
    corpus.question = req.params.question;
    corpus.answer = req.params.answer;
    corpus.index = pinyin(corpus.question);
    console.log(corpus);
    var result = {"status" : 0};
    res.json(result);
};