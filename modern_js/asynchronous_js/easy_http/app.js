const http = new easyHTTP;
/*
// Get posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});
*/
/*
// Single post 
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});
*/

// POST post
const data = {
    title: 'custom post',
    body: 'This is a custom post'
};
/*
// create post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
});
*/
/*
// Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
});
*/
/*
// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});
*/