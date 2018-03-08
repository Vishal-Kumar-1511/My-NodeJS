var fs = require('fs');

var ReadFile = fs.readFileSync('ReadFile.txt','utf8');
console.log(ReadFile);
fs.writeFileSync('WriteFile.txt',ReadFile);