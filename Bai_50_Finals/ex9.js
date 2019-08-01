function nearestTo100(a, b){
  var spreadA = findSpread(a);
  var spreadB = findSpread(b);
  return spreadA > spreadB ? b : a;
}

function findSpread(number) {
	return number > 100 ? ( number - 100) : (100 - number);
}

console.log(nearestTo100(89, 100)); // => 89