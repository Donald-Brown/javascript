let obj = {
    name: 'Mary',
    age: 40,
    greet: function(){
        console.log('Hi!')
    }
};

let {name,greet: hello} = obj;
hello();
