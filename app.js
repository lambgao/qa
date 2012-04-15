var express = require('express');
var port = 10080;
var app = express.createServer();
var path = require('path');
var fs = require('fs');
var url = require('url');

app.set('view engine', 'jade');
app.set('view options', {layout:false});

app.get('/index', function (req, res) {
    res.render('index', {
        locals:{ pagetitle:'中文' }
    });
    console.log("index");
});
app.all('/views/*.(html|css|js|jpg|png){1}', function(req, res, next){
    var realpath = __dirname + url.parse(req.url).pathname;
    console.log(realpath);
    if(path.existsSync(realpath)){
        res.end(fs.readFileSync(realpath));
    }else{
        res.end('Cannot find request static file: '+req.url);
    }
});
app.listen(port);
console.log(module.paths);
console.log('Server running at http://127.0.0.1:'+port+'/'); 