(function(){


	function createXMLHttpRequestObject(){
		var xhr;
		if (window.XMLHttpRequest) { 
			xhr = new XMLHttpRequest();
		} else{ // For Internet Explorer 8 below 
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xhr;
	}
	
	function requestToServer(){
		var xhr = createXMLHttpRequestObject();
		xhr.onreadystatechange = function(){
			if (xhr.status === 200 && xhr.readyState === 4) {
				document.getElementById("myDiv").innerHTML = xhr.responseText;
			}
		};
		xhr.open("GET", "ajax_info.txt", true);
		xhr.send();
	}


	function appendToFileOnServer(){
		var xhr = createXMLHttpRequestObject();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4 && xhr.status === 200 ) {
				alert("Successfully sent to server!");
			}
		};
		xhr.open("POST", "post.php", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		// if more than one seperate by &
		xhr.send("to-append=" + document.getElementById("to-append").value); 
	}

	document.getElementById("change-btn").onclick = function(){
		requestToServer();
	};

	document.getElementById("append-btn").onclick = function(){
		appendToFileOnServer();
	};

})();