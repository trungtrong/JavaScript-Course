function omitCharAt(str, n) {
	//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
  //Lưu ý cho chuối 'abcd' :
  // 		element    'a'|'b'|'c'|'d'
  //		index 	    0	|	1	|	2	|	3
  //  n = 4 thì chuỗi trả về là 'acd'
  //  n = 1 ------------------- 'acd'
  //  n = 2 ------------------- 'abd'
  
  // convert string to array
  var convertedArray = str.split('');
  var length = convertedArray.length;
  if (n > length) {
  	n = n % length;
  }
  var splicedArray = arrayAfterSplice(convertedArray, n, 1);
	return splicedArray.join('');
}

function arrayAfterSplice(array, start, deleteCount) {
	array.splice(start, deleteCount);
  return array;
}

console.log(omitCharAt('Hello Quang Dat', 8));