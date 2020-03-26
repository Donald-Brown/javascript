let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Finished...');
    }, 1500);
});

promise.then(function(value){
    console.log(value);
});