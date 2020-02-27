const sayHello = function() {
    console.log('Hello');
}

const sayHello2 = () => console.log('Hello');

sayHello();
sayHello2();

const sayHello3 = () => 'Hello';

console.log(sayHello3());

const sayHello4 = () => ({ msg: "hello" });

console.log(sayHello4());

const sayHello5 = name => console.log(`Hello ${name}`);

sayHello5('Mary');

const sayHello6 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHello6('Mary', 'Jane');

const users = ['Mary', 'John', 'Jane'];

const nameLenghts = users.map(function(name){
    return name.length;
});

console.log(nameLenghts);

const nameLenghts2 = users.map(name => name.length);

console.log(nameLenghts);

