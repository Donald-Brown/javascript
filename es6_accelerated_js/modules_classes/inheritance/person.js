export class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello ${this.name} you are ${this.age} years old`);
    }
}

