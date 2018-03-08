var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    console.log('Request was made ' + req.url);
    res.writeHead(200,{'Content-type':'text/html'});
    var myReadStream = fs.createReadStream (__dirname + '/test.html','UTF8');
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Listening to the port 3000');