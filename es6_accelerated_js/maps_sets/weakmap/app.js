let cardA = {
    name: 'Ace of Spades'
};

let cardB = {
    name: 'King of Clubs'
};

let key1 = {a:1};
let key2 = {b:2};

//let deck = new Map([['as', cardA], ['kc', cardB]]);
let deck = new WeakMap();
deck.set(key1, cardA);
deck.set(key2, cardB);

console.log(deck.get(key1));
console.log(deck.get(key2));
