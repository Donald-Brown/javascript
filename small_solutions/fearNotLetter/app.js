function fearNotLetter(str) {
    let char = str.charCodeAt(0);

    for(let i=1; i<str.length; i++){
        if(++char != str.charCodeAt(i)){
            return String.fromCharCode(char);
        }
    }
    

    return undefined;
  }
  
console.log(fearNotLetter("abce"));
  