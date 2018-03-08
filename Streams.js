var http = require('http');

var fs = require('fs');

//unlink('WriteFile.txt');

var myReadStream = fs.createReadStream (__dirname + '/ReadFile.txt','UTF8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteFile.txt');


myReadStream.on('data', function(chunk) {
    console.log('new chunk received');
    console.log(chunk);
    myWriteStream.write(chunk);
});