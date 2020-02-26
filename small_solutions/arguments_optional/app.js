function addTogether(){
    // Helper method to determine if number
    const checkIfNum = num => typeof num === 'number' ? num : undefined;

    // Set variables
    let a = checkIfNum(arguments[0]);
    let b = checkIfNum(arguments[1]);

    if(arguments.length > 1){
        return a && b ? a + b : undefined;
    }else{
        if(a){
            return function(x){
                if(checkIfNum(x)){
                    return a + x;
                }else{
                    return undefined;
                }
            };
        }else{
            return undefined;
        }
    }
}

console.log(addTogether(2, 3));