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
console.log(deck.size);

console.log(deck.get('kc'));

deck.delete('as');
console.log(deck);

deck.clear();
console.log(deck);