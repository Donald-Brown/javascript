function sumPrimes(num){
    let i = 1;
    let sum = 0;
    
    while(i <= num){
        if(isPrime(i)){
            sum += i;
        }
        i++
    }
    return sum;
}

// fuction to check whether or not a number is prime
function isPrime(int){
    for (let i = 2; i < int; i++){
        if (int % i === 0)  return false;
    }
    return int !== 1 && int !== 0;
}





console.log(sumPrimes(10));