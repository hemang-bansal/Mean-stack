var fs = require('fs');

console.log("going to get a file");

fs.readFile('hello.js', function(err, file){
	console.log('got the file');
});

console.log('app continues');

// using callbacks

var onLoad = function(err,file){
	console.log('got the file');
};

console.log("going to get a file");
fs.readFile('hello.js', onLoad);
console.log('app continues');

