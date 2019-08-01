function toNextChar(str) {
	// Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmpp"
  // Tham số:
  // - String: chuỗi nhập vào ban đầu.
  var arrayOfCharCode = mapToCharCode(str);
  console.log(arrayOfCharCode);
  return mapToString(arrayOfCharCode);
}

function mapToCharCode(str) {
	var arrOfString = str.split('');
  return arrOfString.map(element => 
    element.charCodeAt(0)
    // b/c element is string
    // b/c 'H' : index = 0
  );
}

function mapToString(array) {
	var arrayOfString = array.map(element => {
  	return String.fromCharCode(element + 1);
  });
  console.log(arrayOfString);
  return arrayOfString.join('');
}
console.log(toNextChar('Hello'));

