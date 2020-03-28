class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

function TopObj(){
    this.lastName = 'Jane';
}

let person = Reflect.construct(Person, ['Mary', 47], TopObj);

console.log(person);
console.log(person instanceof Person);
console.log(person.__proto__ === TopObj.prototype);