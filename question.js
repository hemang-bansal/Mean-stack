var answer = "good question";
var ask = function(question){
	console.log(question);
	return answer;
};
module.exports = {
	ask : ask
};