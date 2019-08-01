//			Exercise 6
//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================
function equal_pt(str) { 
 var length  = str.length;
 var arr;
 if (length === 0) {
 		return 'empty string';
 }
 // convert string to array
 else {
 	arr = str.split('');
 }
 
 var countObj = countOccurrences(arr);
 
 // compare the occurrences of each key in Obj
 var occur;
 var isEquivalent = true;
 	for (var key in countObj) {
 		// assign the begin value for occur
    	if (occur === undefined) {
    		occur = countObj[key];
    	}
    	else {
    		if (occur !== countObj[key]) {
      		isEquivalent = false;
      		break;
      		}
    	}
 	}
 	return isEquivalent;
}

// Couting the occurrences of each element in an array
function countOccurrences(arr) {
	var countObj = arr.reduce((accumulation, item) => {
  	// if value of acc[item] is not exist
    if (!accumulation[item]) {
    	accumulation[item] = 1;
    }
    else {
    	accumulation[item]++;
    }
    	return accumulation;
 	}, {});
	  console.log(countObj);
  	return countObj;
}

console.log(equal_pt('paatpsts'));
console.log(equal_pt('ppaatpss'));