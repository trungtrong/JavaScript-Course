// Date object
/*
var today = new Date();
console.log(today);

var birthday = new Date('1995-08-07T03:24:00');
console.log(birthday);

var birthday = new Date('August 07, 1995 03:24:00');
console.log(birthday); */

/******** Method ****************/
//var today = Date.now();
//console.log(today);

/*
var start = Date.now();
console.log('start', start);

setTimeout(() => {
	var  now = Date.now();
	var millis = now - start;
	console.log(now);
	console.log('time elapsed = '+ Math.floor(millis/1000));
}, 2000);
***********************/

// Date.UTC
//var utcDate1 = new Date(Date.UTC(2019, 4, 2, 3, 4, 5));
//console.log(utcDate1.toUTCString());

// getDate/ getMonth()
/*
//var timeNow = new Date('2018/08/27');
//var timeNow = new Date('August 07, 1995 03:24:00 GMT+10:00');
var timeNow = new Date();
//'1995-08-07T03:24:00'
console.log(timeNow.getDate());
console.log(timeNow.getDay());
console.log(timeNow.getMonth());
console.log(timeNow.getFullYear());
console.log(timeNow.getYear());

console.log(timeNow.getTimezoneOffset()); 
**********************************/


// Module moment.js
var moment =  require('moment');

/************ PARSE ************************/
/*/ Now
var now = moment();
console.log(now);  */

/*/ String  + Format
var time = moment('12-25-1995', 'MM-DD-YYYY', true);
console.log(time);

var time = moment('1995/12/25', 'YYYY/MM/DD', true);
console.log(time); */


// 3.    Maniputate ***********/

// Add
var currenttime = moment();
var future = moment().add(7, 'd');
console.log('current: ', currenttime);
console.log('future: ',future); 

/*/ subtract
var time = moment().subtract(1, 'days');
console.log(time);

var time = moment('12-25-1995','MM-DD-YYYY').subtract(1, 'days');
console.log(time, typeof time); */

/****************************************/
//4.  Display

//Difference
/* var past = moment('12-25-2018','MM-DD-YYYY')
var currentTime = moment();
console.log(currentTime.diff(past, 'days')); */

/*var past = moment([2018, 1]);
console.log(past);
var currentTime = moment();
console.log(currentTime.diff(past, 'months')); 
*/

/********************************************/
// 8- Duration
//console.log(moment.duration(2,'days'));
/*
var past = moment('05-02-2019','MM-DD-YYYY')
var currentTime = moment();
var duration = moment.duration(currentTime.diff(past));
console.log(duration); */