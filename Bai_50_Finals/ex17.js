function maxOfSumChain(arr,k){
	var max = 0;
  var length = arr.length;
  var start = 0;
  var end = start + k;
  while (end <= length) {
    var newArray = arr.slice(start, end);
    var sum = newArray.reduce((accumulation, element) => 
    			accumulation + element
    );
    
    if (max < sum) {
    	max = sum;
    }
    start++;
    end++;
  }
  return max;
}

console.log(maxOfSumChain([1, 3, 2, 6, 2], 3));


// describe('Maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers', function () {
//    it('return 5 when sumChain([1,3,2],2)', function () {
//    		 expect(maxOfSumChain([1,3,2],2)).to.eql(5);
//    });
//    it('return 11 when sumChain([1,3,2,6,2],3)', function () {
//    		 expect(maxOfSumChain([1,3,2,6,2],3)).to.eql(11);
//    });
// });