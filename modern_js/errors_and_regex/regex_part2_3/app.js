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


// string to match 
const str = 'gray?';

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