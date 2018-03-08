var http = require('http');

var fs = require('fs');


var myReadStream = fs.createReadStream (__dirname + '/ReadFile.txt','UTF8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteFile.txt');

myReadStream.pipe(myWriteStream);