function telephoneCheck(str) {
    const DIGITS = str.match(/\d/g);
    if(DIGITS.length === 11){
        if(str.charAt(0) !== '1'){
            return false;
        }
        str = str.substring(1);
        if(str.charAt(0) === ' '){
            str = str.substring(1);          
        }

    }else if(DIGITS.length !== 10){
        return false;
    }

    if(str.charAt(0) === '('){
        if(!/\(\d\d\d\)/.test(str.substring(0,5))){
            return false;
        }
        
        str = str.substring(5);
        if(str.charAt(0) === ' '){
            str = str.substring(1);
        }
    }else{
        if(!/\d\d\d/.test(str.substring(0,3))){
            return false;
        }
        str = str.substring(3);

        if(str.charAt(0) === '-' || str.charAt(0) === ' '){
            str = str.substring(1);
        }
    }

    if(!/\d\d\d/.test(str.substring(0,3))){
        return false;
    }
    str = str.substring(3);

    if(str.charAt(0) === '-' || str.charAt(0) === ' '){
        str = str.substring(1);
    }

    if(!/\d\d\d\d/.test(str.substring(0,4))){
        return false;
    }
    str = str.substring(4);

    if(str.length){
        return false;
    }

    return true;
}

console.log(telephoneCheck("1 (555) 555-5555"));