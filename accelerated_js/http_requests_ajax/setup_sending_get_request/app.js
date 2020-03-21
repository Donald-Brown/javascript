const http = new XMLHttpRequest();
const url = 'http://jsonplaceholder.typicode.com/posts';
const method = 'GET';

http.open(method, url);
http.onreadystatechange = function(){
    if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
        console.log(JSON.parse(http.responseText));
        console.log(JSON.parse(http.responseText)[10].id);
    }else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200){
        console.log('Error');
    }
};

http.send();