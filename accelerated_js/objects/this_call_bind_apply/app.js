function fn(message){
    console.log(message + this);
}
fn();

const obj = {
    fn2: fn
};

const person = {
    name: 'Mary'
}

obj.fn2.bind(person, 'Hello')();

obj.fn2.call(person, 'Hello');

obj.fn2.apply(person, ['Hello']);