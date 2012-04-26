var mongo = require('mongoskin');
var db = mongo.db('127.0.0.1:27017/foobar?auto_reconnect=true&poolSize=5');
db.bind('blog');
db.blog.find().toArray(function(err, books){
console.log(books);
db.close();
});

