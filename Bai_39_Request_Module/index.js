// https://www.npmjs.com/package/request

var fs = require('fs');
var request = require('request');
// request('http://file.vforum.vn/hinh/2014/5/hinh-nen-dien-thoai-android-9.jpg').pipe(fs.createWriteStream('HinhNen.jpg'));
// send a request to url .... and write data into hinhnen.jpg

//request('https://myproject1-90d50.firebaseio.com/.json').pipe(fs.createWriteStream('text.json'));

fs.createReadStream('text.json').pipe(request.get('https://myproject1-90d50.firebaseio.com/.json'));