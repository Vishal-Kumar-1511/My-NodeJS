var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    console.log('Request was made ' + req.url);
    res.writeHead(200,{'Content-type':'application/json'});
    var myObject = {
        name : 'Vishal',
        job : 'SDE',
        age : 23,
    };
    res.end(JSON.stringify(myObject));
});

server.listen(3000,'127.0.0.1');
console.log('Listening to the port 3000');