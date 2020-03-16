function fn(){
    console.log(this);
}
fn();

const obj = {
    fn2: fn
};

obj.fn2();

obj.fn2.bind(this)();

