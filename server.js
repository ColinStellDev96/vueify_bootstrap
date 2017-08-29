var express = require('express');

var app = express();

app.use(express.static('./'));

app.get('/', function (req, res){
    res.send('/index.html', {root:'./.'});
});


app.listen(8080);
