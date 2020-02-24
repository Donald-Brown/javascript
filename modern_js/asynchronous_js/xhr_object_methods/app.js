////////////////////////////////////
// What is Ajax and XHR

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open("GET", "data.txt", true);

  //console.log('READYSTATE', xhr.readyState);

  // Optional - used for spinners and loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
}
//////////////////////////////////////////////////
// Working with ajax and jsonus === 200 && this.readyState === 4){
        //console.log(this.responseText);
      //}
  //}

  xhr.onerror = function(){
      console.log('Request error...');
  }

  xhr.send();

  // Ready state values
  // 0: request not initialized
  // 1: server conection established
  // 2: request not recieved
  // 3: processing request
  // 4: request finished and response ready

  // Common HTTP Status codes
  // 200 "OK"
  // 403 "Forbidden"
  // 404 "Page Not Found"
    }