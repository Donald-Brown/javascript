function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = collection.filter(item => {
    for(let key in source){
    return source[key] == item[key];
  });
  
  


  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));