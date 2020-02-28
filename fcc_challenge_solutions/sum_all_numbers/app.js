/**
 * Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
 */

function sumAll(arr) {
    // determine the larger array item
    let min, max;
    if(arr[0] < arr[1]){
        min = arr[0];
        max = arr[1];
    }else{
        min = arr[1];
        max = arr[0];
    }

    // For loop to itirate through range
    let sum = 0;
    for(let i=min; i<=max; i++){
        sum += i;
    }
    return sum;
}

console.log(sumAll([1, 4]));
  