/*
let account = {
    cash: 12000,
    withdraw: function(amount) {
        this.cash -= amount;
        console.log(`Withdrew ${amount}, new cash reserve is: ${this.cash}`);
    }
};

account.withdraw(1000);

Object.defineProperty(account, "name", {
    value: "ID000-1"
    //writable: true  // default is read only
});

console.log(account.name);
account.name = "ID000-5";
console.log(account.name);
*/

let account = {
    cash: 12000,
    _name: 'Default',
    withdraw: function(amount) {
        this.cash -= amount;
        console.log(`Withdrew ${amount}, new cash reserve is: ${this.cash}`);
    }  
};

Object.defineProperty(account, "name", {
    get: function() {
        return this._name;
    },
    set: function(name) {
        if(name === 'Mary'){
            this._name = name;
        }
    }
});

console.log(account.name);

account.name = 'ID000-5';

console.log(account.name);

console.log(account._name);

account.name = 'Mary';

console.log(account.name);

console.log(account._name);