let btn = document.querySelector('button');

let fn2 = () => console.log(this);

function fn(){
    console.log(this);
}

//btn.addEventListener('click', fn);
btn.addEventListener('click', fn2);