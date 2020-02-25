function sumFibs(num){
    function returnOdd(int){
        if(int % 2 !== 0){
            return int;
        }
    }
    
    let arr = [1, 1];
    let newFib = 2;
    
    while(newFib <= num){
        arr.push(newFib);
        newFib = arr[arr.length - 1] + arr[arr.length - 2];
    }
    return arr.filter(returnOdd).reduce((a,b) => a + b);
}

console.log(sumFibs(4000000));