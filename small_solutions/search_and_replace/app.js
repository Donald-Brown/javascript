function myReplace(str, before, after) {
    if(before === before.toLowerCase()){
       return str.replace(before, after);
    }else{
        return str.replace(before, after.replace(after[0], after[0].toUpperCase()));
    }
  }
  
 console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); 

 console.log(myReplace("His name is Tom", "Tom", "john"));