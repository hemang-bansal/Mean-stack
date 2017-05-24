console.log('1. Starting the app');

var hold = setTimeout(function(){
	var hello = require('./hello');
	var talk = require('./');
	var question = require('./question')
	hello();
	talk.intro();
	talk.hello("Jason");
	var answer = question.ask("How was your day?");
	console.log(answer);
},1000);

console.log('3. app will finish now');