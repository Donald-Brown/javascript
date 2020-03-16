function fn(){
    console.log(this);
}
fn();

const obj = {
    fn2: fn
};

const person = {
    name: 'Mary'
}

obj.fn2();
