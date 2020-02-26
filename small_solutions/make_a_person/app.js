var Person = function(firstAndLast) {
    let first = firstAndLast.split(' ')[0];
    let last = firstAndLast.split(' ')[1];

    // Function getFirstName
    this.getFirstName = function(){
        return first;
    }

    // Function getLastName
    this.getLastName = function(){
        return last;
    }

    // Function getFullName
    this.getFullName = function(){
        return `${first} ${last}`;
    }

    // Function setFirstName
    this.setFirstName = function(str){
        first = str; 
    }

    // Function setFirstName
    this.setLastName = function(str){
        last = str; 
    }

    // Function setFullName
    this.setFullName = function(str){
        first = str.split(' ')[0];
        last = str.split(' ')[1];
    }
};

var bob = new Person('Bob Ross');

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.fullName);
bob.setFirstName('John');
bob.setLastName('Flake');
console.log(bob.getFullName());
bob.setFullName('John Gosh');
console.log(bob.fullName);
