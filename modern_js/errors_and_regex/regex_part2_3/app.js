//regex
let re;
re = /hello/i;

// metacharacter symbols
re = /^h/i; // must start with
re = /rld$/i; // must end with

re = /^world$/i; 

re = /wo.ld/i; // . one character

re = /w*d/i; // * any character

re = /gre?a?y/; // ? optional character

re = /gre?a?y\?/; // \ escape character

// Brackets [] - Character sets
re = /gr[ae]y/i // must be a or e
re = /gr[^ae]y/i // matches anything except a or e
re = /gr[a-z]y/i // matches any lowercase letter

// braces {} equals quantifier
re = /hel{2}o/; // must occur exactly {n} times
re = /hel{2,4}o/; // must occur 2-4 times
re = /hel{2,}o/; // must occur at least {n} times

// Parenthasis are used for grouping
re = /([0-9]x){3}/;

// Shorthand character classes
re = /\w/; // word character - alphanumeric or _
re = /\w+/; // + = 1 or more times
re = /\W/; // non-word character
re = /\d/; // digit
re = /\D/; // non-digit
re = /\s/; // white space
re = /\S/; // non-white space
re = /Hell\b/i; // Word boundry

// assertions
re = /x(?=y)/; // matches x only if it is followed by y 
re = /x(?!y)/; // matches x only if it is NOT followed by y 

// string to match 
const str = 'yx';

//log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);