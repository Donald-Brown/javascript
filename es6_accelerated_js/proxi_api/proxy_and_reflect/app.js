let person = {
    age: 46,
    name: 'Mary'
};

let handler = {
    get: function(target, name){
        return name in target ? target[name] : 'Does not exist';
    },
    set: function(target, property, value){
        if(value.length > 2){
            Reflect.set(target, property, value);
        }
    }
};

let proxy = new Proxy(person, handler);

console.log(proxy.age);
console.log(proxy.handler);

proxy.name = 'Jane';
console.log(proxy.name);