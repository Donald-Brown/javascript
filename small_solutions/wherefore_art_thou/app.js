function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = collection.filter(item => {
    for(let key in source){
    if(source[key] != item[key]){
        return false;
      }
    }
    return true;
  });
  
  


  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));