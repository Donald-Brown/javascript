let person = {
    age: 46
};

let handler = {
    get: function(target, name){
        return name in target ? target[name] : 'Does not exist';
    }
};

let proxy = new Proxy(person, handler);

console.log(proxy.age);
console.log(proxy.handler);

