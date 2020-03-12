function whatIsInAName(collection, source) {
    /*
    // What's in a name?
    const arr = [];
  
    const keys = Object.keys(source);
  
    for (const cur of collection) {
      let hasSameKeyValPairs = true;
      for(const key of keys){
          if(cur[key] !== source[key]){
              hasSameKeyValPairs = false;
              break;
          }
      }
  
      if(hasSameKeyValPairs){
          arr.push(cur);
      }
    }
  
    return arr;
  }
  */
    const keys = Object.keys(source);

    return collection.filter(cur => {
        let hasSameKeyValPairs = true;

        for(const key of keys){
            if(cur[key] !== source[key]){
                hasSameKeyValPairs = false;
                break;
            }
        }

        return hasSameKeyValPairs;
    });
};


console.log(
whatIsInAName(
    [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
)
);

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));