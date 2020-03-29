function log(message){
    console.log(`log message: ${message}`);
}

let handler = {
    apply: function(target, thisArg, argumentsList){
        if(argumentsList.length === 1){
            return Reflect.apply(target, thisArg,argumentsList);
        }
    }
};

let proxy = new Proxy(log, handler);
proxy('Hello');