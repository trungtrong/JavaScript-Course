// setInterval
// clearInterval 
var i = 0;
var intervalID = setInterval(() => {
	++i;
	console.log(i);
	if(i === 5) {
		clearInterval(intervalID);
	}
}, 1000);