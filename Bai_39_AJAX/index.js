/*
var httpRequest = new XMLHttpRequest();
                    //XMLHttpRequest
httpRequest.open("GET", "https://developer.mozilla.org/", true);
httpRequest.onreadystatechange = function() {
	if(httpRequest.readyState === 4 && httpRequest.status === 200) {
		console.log(httpRequest.responseText);
	}
};
httpRequest.send();
*/
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null); 
