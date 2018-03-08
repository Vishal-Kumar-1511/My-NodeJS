var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('This is the testpage');
});

app.get('/profile/:id', function(req, res) {
    res.send('You queried for the id' + req.params.id);
});

app.listen(3000);
