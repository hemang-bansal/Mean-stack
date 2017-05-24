var hello = function(name){
	console.log("Welcome " + name);
};

var intro = function(){
	console.log("This is intro");
};
module.exports = {
	hello : hello,
	intro : intro
};