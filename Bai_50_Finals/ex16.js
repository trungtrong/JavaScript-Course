function middleArray(arr1,arr2){
	var newArray = []; 
  newArray.push(middleElement(arr1));
  newArray.push(middleElement(arr2));
  return newArray;
}

function middleElement(array) {
	var length = array.length;
	var middle = Math.ceil((length - 1)/ 2);
	console.log('middle =', middle);
  	console.log(array[middle]);
    return array[middle];
}

console.log(middleArray([1, 3, 4], [2, 5, 6]));