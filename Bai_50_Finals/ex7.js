function first(array, n) {
  // viết hàm first trả về giá trị đầu tiên của mảng,
  // nếu n được truyền vào thì trả về 1 mảng chứa 
  // n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). 
  // Nếu n <= 0 thì trả về mảng trống.
  
  // Tham số:
  //	- array: mảng gốc
  //	- n: số phần tử trả về

  //viết hàm first trả về giá trị đầu tiên của mảng,
  if(n === undefined) {
  	return array[0];
  }
  else {
  	if (n > 0) {
  		return array.slice(0, n);
    }
    else {
    	return [];
    }
  }
}

console.log(first([1, 2, 3]));
