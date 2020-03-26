function waitASec(seconds){
    return new Promise(function(resolve, reject){
        if(seconds > 2){
            reject('Rejected');
        }else{
            setTimeout(function(){
                seconds++;
                resolve(seconds);
            }, 1000);
        }
    });
}

waitASec(4)
    .then(waitASec)
    .then(function(seconds){
        console.log(seconds);
    })
    .catch(function(error){
        console.log(error);
    });

