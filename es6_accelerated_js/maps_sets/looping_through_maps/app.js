let cardA = {
    name: 'Ace of Spades'
};

let cardB = {
    name: 'King of Clubs'
};


//let deck = new Map([['as', cardA], ['kc', cardB]]);
let deck = new Map();
deck.set('as', cardA);
deck.set('kc', cardB);

console.log(deck);
console.log(deck.keys());

for(key of deck.keys()){
    console.log(key);
}

for(value of deck.values()){
    console.log(value);
}

for(entry of deck.entries()){
    console.log(entry);
}

for(entry of deck){
    console.log(entry);
}
