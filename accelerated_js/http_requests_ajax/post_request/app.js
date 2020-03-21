const http = new XMLHttpRequest();
const url = 'http://jsonplaceholder.typicode.com/posts';
const method = 'POST';

const data = 'title=Post%20Title&body=Body';

http.open(method, url);
http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function(){
    if(http.readyState === XMLHttpRequest.DONE && http.status === 201){
        console.log(JSON.parse(http.responseText));
    }else if(http.readyState === XMLHttpRequest.DONE && http.status !== 201){
        console.log('Error');
    }
};

http.send(data);