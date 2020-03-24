export class Person {
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name.toUpperCase();
    }

    set name(value){
        if(value.length > 2){
            this._name = value;
        }else{
            console.log('Rejected');
        }
    }
}

