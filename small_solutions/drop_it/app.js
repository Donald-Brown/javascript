function dropElements(arr, limilter){
    while(arr.length > 0 && !limilter(arr[0])){
        arr.shift();
    }
    return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 2; }));
