function myReplace(str, before, after) {
    return before === before.toLowerCase() ? str.replace(before, after) : str.replace(before, after.replace(after[0], after[0].toUpperCase()));
}
  
 console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); 

 console.log(myReplace("His name is Tom", "Tom", "john"));