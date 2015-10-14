function requestToServer(){
  // 1. CREATE THE OBJECt
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // 2. INIT THE CALLBACK FUNCTION
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      document.getElementById("myDiv").innerHTML = xhr.responseText;
    }
  };
  // 3. 
  xhr.open("GET", "ajax_info.txt", true);
  // 4. Send the request
  // Optional args are for POST 
  xhr.send();
}


document.getElementById("change-btn").onclick = function(){
  requestToServer();
};