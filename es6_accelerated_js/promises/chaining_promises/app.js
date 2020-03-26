function waitASec(seconds){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            seconds++;
            resolve(seconds);
        }, 1000);
    });
}

waitASec(3).then(waitASec).then(function(seconds){
    console.log(seconds);
})