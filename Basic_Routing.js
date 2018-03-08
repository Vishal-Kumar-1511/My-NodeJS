var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    console.log('Request was made ' + req.url);
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200,{'Content-type':'text/html'});    
        fs.createReadStream(__dirname + '/test.html').pipe(res);
    }
    else if(req.url === '/contact' || req.url === '/CONTACT') {
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if (req.url === '/api' || req.url === '/application') {
        res.writeHead(200,{'content-type':'application/json'});
        var myObject = {
            name : 'Vishal',
            job : 'SDE',
            age : 23,
        };
        res.end(JSON.stringify(myObject));
    }
    else {
        res.writeHead(404,{'content-type':'text/html'});
        fs.createReadStream(__dirname + '/NotFound.html').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log('Listening to the port 3000');