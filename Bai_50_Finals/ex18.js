/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
// Viêt hàm tại đây!
	var objOfCount = countOccurrences(arr);
  var maxOfOccurrence = findMax(objOfCount);
  
  // return newArray that contains all element that have the    
  // greatest time of occurrences
  var newArray = [];
  for (var key in objOfCount) {
  	if (objOfCount[key] === maxOfOccurrence) {
    	newArray.push(parseInt(key));
      console.log(parseInt(key));
    }
  }
  return newArray;
}

function countOccurrences(arr) {
	var objOfCount = arr.reduce((acc , elem) => {
  	if (acc[elem] === undefined) {
    	acc[elem] = 1;
    }
    acc[elem]++;
    return acc;
  }, {});
  console.log('obj= ', objOfCount);
  return objOfCount;
}

function findMax(obj) {
	var max = 0;
  for (var key in obj) {
  	if (max < obj[key]) {
    	max = obj[key];
    }
  }
  console.log('max= ',max);
  return max;
}

console.log(findMostFrequent([1, 2, 1, 3, 1]));