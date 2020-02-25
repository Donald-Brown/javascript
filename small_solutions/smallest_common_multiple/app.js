function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    function range(min, max) {
        let arr = [];
        for (let i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

    let multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}


console.log(smallestCommons([1,5]));