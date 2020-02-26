function palindrome(str) {
    // 1) convert to lowercase
    const lowercase = str.toLowerCase();
    //console.log(lowercase);

    // 2) remove non-alpha numeric characters
    const alphaNum = lowercase.split('').filter((char) => /[a-z0-9]/.test(char)).join('');
    //console.log(alphaNum);

    // 3) check if palendrome
    for(let i=0; i<Math.floor(alphaNum.length / 2); i++){
        if(alphaNum[i] !== alphaNum[alphaNum.length -1 - i]){
            return false;
        }
    }

    return true;
}
  
  
  
  console.log(palindrome("rACE CAR"));