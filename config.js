/**
 * config
 */
var mongo = require('mongoskin');

exports.config = {
	"name": 'Mynah',
	"description": '一只可以和你聊天的黑鸟',
	"version": '0.0.0',
	"port": 80,
	"db":'127.0.0.1:27017/test?auto_reconnect=true&poolSize=5'
}

var db = exports.config.db;
exports.config.db = mongo.db(db);