function difference(n) {
//Viết một hàm JavaScript có 1 tham số n 
//trả về tuyệt đối của hiệu só đó và 13,
// nếu số đó lớn hơn 13 trả về 
//gấp đôi tuyệt đối của hiệu 2 số.
	
  return n > 13 ? (n - 13) * 2 : (13 - n);
}

console.log(difference(7)); // 6
console.log(difference(19)); // 12

