const NUMBERS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const FACTORS = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};

function convertToRoman(num) {
    let output = '';
    let i=0;
    while(num > 0){
        const SUBTRACTOR = NUMBERS[i];
        if(SUBTRACTOR > num){
            i++;
        }else{
            num -= SUBTRACTOR;
            output += FACTORS[SUBTRACTOR];
        }
    }

    return output;
}
   
console.log(convertToRoman(36));