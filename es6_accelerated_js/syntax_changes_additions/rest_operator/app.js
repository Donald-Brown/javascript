let numbers = [1,2,3,4,5];

function sum(...toAdd){
    let sum = 0;
    for(let i=0; i<toAdd.length; i++){
        sum += toAdd[i];
    }
    return sum;
}

console.log(sum(10,100,1));