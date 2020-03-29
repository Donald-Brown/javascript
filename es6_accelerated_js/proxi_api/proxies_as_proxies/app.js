let person = {
    age: 46,
    name: 'Mary'
};

let handler = {

};

let protoHandler = {
    get: function(target, name){
        return name in target ? target[name] : 'Does not exist';
    }
};

let proxy = new Proxy({}, handler);

let protoProxy = new Proxy(proxy, protoHandler);

Reflect.setPrototypeOf(person, protoProxy);

console.log(person.hobbies);