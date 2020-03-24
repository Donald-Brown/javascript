import {Person} from './person.js';
import {Helper} from './helper.js';

class Mary extends Person {
    constructor(age){
        super('Mary'); // need to use super if adding a constructor
        this.age = age;
    }
}

let mary = new Mary(39);
console.log(mary);

let helper = new Helper();
Helper.logTwice('I\'m static');
