let test = 'Global scope';
console.log(test);

function localScope(){
    let test = 'Local scope';
    console.log(test);
}

function localScope2(){
    console.log(test);
}

localScope();
localScope2();