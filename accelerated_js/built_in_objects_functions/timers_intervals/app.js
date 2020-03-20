setTimeout(function(){
    console.log('Finished');
}, 2000);

const interval = setInterval(function(){
    console.log('Ping!');
}, 500);

setTimeout(function(){
    clearInterval(interval);
}, 4000);