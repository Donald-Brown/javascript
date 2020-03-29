let person = {
    age: 46,
    name: 'Mary'
};

let handler = {
    get: function(target, name){
        return name in target ? target[name] : 'Does not exist';
    }
};

let proxy = new Proxy({}, handler);

console.log(person.hobbies);
Reflect.setPrototypeOf(person, proxy);
console.log(person.hobbies);