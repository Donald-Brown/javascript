function whatIsInAName(collection, source){
    return collection.filter(obj => {
        return Object.keys(source).reduce((acc, key) => {
            if(obj[key] !== source[key]){
                return false;
            }
            return acc;
        }, true);
    });
}

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