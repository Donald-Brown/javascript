import {Person} from './person.js';

class Mary extends Person {
    constructor(age){
        super('Mary'); // need to use super if adding a constructor
        this.age = age;
    }

    greet(){
        console.log('local scope');
    }

    greetTwice(){
        this.greet();
        this.greet();
    }

    
    greetThree(){
        super.greet();
        super.greet();
        super.greet();
    }
}

let mary = new Mary(39);
mary.greetTwice();
mary.greetThree();

console.log(mary.__proto__ === Mary.prototype);
console.log(mary.__proto__ === Person.prototype);