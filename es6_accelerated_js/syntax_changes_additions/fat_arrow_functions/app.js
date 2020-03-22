const fn = () => console.log('Hello World');

fn();

const fn2 = () => 'Hi';
console.log(fn2());

const fn4 = () => {
    let a = 2;
    let b = 3;
    return a + b;
};
console.log(fn4());

const fn5 = (a,b) => a + b;
console.log(fn5(3,5));

setTimeout(() => console.log('Hello'),1000);